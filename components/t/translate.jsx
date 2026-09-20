import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/v/v7y0zackt.css';
import '../../css/e/edk22ibmj.css';
import '../../css/a/aer981g6j.css';
import '../../css/z/zdy_qebhw.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="v7y0zackt"/><path class="edk22ibmj"/><path class="aer981g6j"/><path class="zdy_qebhw"/></g>`,
		"fallback": "system-uicons:translate",
	});
}

export default Component;
