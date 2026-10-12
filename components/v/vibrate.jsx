import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zb3-aidrn.css';
import '../../css/b/bra7wczhs.css';
import '../../css/r/r1ygcsbdt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(-90 6.68 20.25)" class="zb3-aidrn"/><rect transform="rotate(-90 6.68 20.25)" class="bra7wczhs"/><path class="r1ygcsbdt"/></g>`,
		"fallback": "andrsrxn:vibrate",
	});
}

export default Component;
