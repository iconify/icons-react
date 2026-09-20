import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jw0ofiblw.css';
import '../../css/f/fcszt4b8v.css';
import '../../css/m/ma-7u5awq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jw0ofiblw"/><path class="fcszt4b8v"/><path class="ma-7u5awq"/></g>`,
		"fallback": "streamline-color:one-finger-hold",
	});
}

export default Component;
