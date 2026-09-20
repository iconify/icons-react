import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xrp6w6b2y.css';
import '../../css/r/r3705ybdj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xrp6w6b2y"/><path class="r3705ybdj"/></g>`,
		"fallback": "streamline-ultimate:love-it-break",
	});
}

export default Component;
