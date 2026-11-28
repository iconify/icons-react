import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyruocc3c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bm_askbkq.css';
import '../../css/c/cxp113bbg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyruocc3c secondary"/><g class="dt0cm9dhy primary"><path class="bm_askbkq"/><path class="cxp113bbg"/></g>`,
		"fallback": "iconaut:taco-duo",
	});
}

export default Component;
