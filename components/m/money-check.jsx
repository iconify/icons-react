import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/asvhlj6gi.css';
import '../../css/s/sse-yfbmb.css';
import '../../css/r/r3su53b9v.css';
import '../../css/m/mur8xvbmw.css';
import '../../css/b/bn4-50b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="asvhlj6gi"/><path class="sse-yfbmb"/><path class="r3su53b9v"/><circle class="mur8xvbmw"/><path class="bn4-50b1z"/></g>`,
		"fallback": "andrsrxn:money-check",
	});
}

export default Component;
