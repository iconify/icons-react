import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9tabfbwb.css';
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
		"content": `<path class="m9tabfbwb"/><path class="nknwp425q"/><path class="bzswhqb2n"/>`,
		"fallback": "carbon:tornado-warning",
	});
}

export default Component;
