import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c479rxbrg.css';
import '../../css/h/huuajhmrh.css';
import '../../css/t/tdhzq11dq.css';
import '../../css/c/cr8l1lart.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c479rxbrg"/><circle class="huuajhmrh"/><path class="tdhzq11dq"/><path class="cr8l1lart"/>`,
		"fallback": "openmoji:slightly-frowning-face",
	});
}

export default Component;
