import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ousr7gb-s.css';
import '../../css/o/o_v56d7tv.css';
import '../../css/p/plon33w2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ousr7gb-s"/><path class="o_v56d7tv"/><path class="plon33w2y"/>`,
		"fallback": "withicons-bauhaus:panel-right",
	});
}

export default Component;
