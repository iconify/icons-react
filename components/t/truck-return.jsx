import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f-a15_hfh.css';
import '../../css/d/dudf7qbam.css';
import '../../css/e/eqod-_zxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f-a15_hfh"/><path class="dudf7qbam"/><path class="eqod-_zxh"/></g>`,
		"fallback": "hugeicons:truck-return",
	});
}

export default Component;
