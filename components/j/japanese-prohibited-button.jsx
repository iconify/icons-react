import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlbqo2bly.css';
import '../../css/c/c13pizxnv.css';
import '../../css/z/zmuow6bjd.css';
import '../../css/u/ue06dqb6a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" transform="matrix(.2612 0 0 .2621 -91.39 -3.483)" class="wlbqo2bly"/><path class="c13pizxnv"/><path transform="matrix(.2612 0 0 .2621 -91.39 -3.483)" class="zmuow6bjd"/><path transform="matrix(.2612 0 0 .262 -91.386 -3.483)" class="ue06dqb6a"/>`,
		"fallback": "openmoji:japanese-prohibited-button",
	});
}

export default Component;
