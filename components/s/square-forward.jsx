import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yqrc2ltvy.css';
import '../../css/u/uyisotbmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yqrc2ltvy"/><path class="uyisotbmz"/></g>`,
		"fallback": "reicon:square-forward",
	});
}

export default Component;
