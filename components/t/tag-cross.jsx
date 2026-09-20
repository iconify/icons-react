import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zxplfrbly.css';
import '../../css/z/zntn67nyj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zxplfrbly"/><path class="zntn67nyj"/></g>`,
		"fallback": "reicon:tag-cross",
	});
}

export default Component;
