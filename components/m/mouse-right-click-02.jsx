import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qj1iru8vv.css';
import '../../css/t/tn42p5bue.css';
import '../../css/r/rzggd57gx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qj1iru8vv"/><path class="tn42p5bue"/><circle transform="matrix(-1 0 0 1 20 2.5)" class="rzggd57gx"/></g>`,
		"fallback": "hugeicons:mouse-right-click-02",
	});
}

export default Component;
