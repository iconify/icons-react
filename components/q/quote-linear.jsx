import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/ch-rxbbzt.css';
import '../../css/f/fg4s8lnfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ch-rxbbzt"/><path class="fg4s8lnfo"/></g>`,
		"fallback": "solar:quote-linear",
	});
}

export default Component;
