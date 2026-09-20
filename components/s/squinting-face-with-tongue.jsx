import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/t/t0cgit8gt.css';
import '../../css/n/nq9zpfqqf.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/q/qmnpc1bre.css';
import '../../css/w/wb0pqqbfi.css';
import '../../css/y/yfb5z79to.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><path class="t0cgit8gt"/><path class="nq9zpfqqf"/><g class="x8poo_bjf"><circle class="qmnpc1bre"/><path class="wb0pqqbfi"/><path class="yfb5z79to"/></g>`,
		"fallback": "openmoji:squinting-face-with-tongue",
	});
}

export default Component;
