import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/btt16zbsb.css';
import '../../css/y/yov2mac9k.css';
import '../../css/n/nknwp425q.css';
import '../../css/b/bzswhqb2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="btt16zbsb"/><path class="yov2mac9k"/><path class="nknwp425q"/><path class="bzswhqb2n"/>`,
		"fallback": "carbon:marine-warning",
	});
}

export default Component;
