import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw5ar0h8y.css';
import '../../css/g/gdy4fzb-z.css';
import '../../css/y/yyihj2ujd.css';
import '../../css/m/m3gwznb_p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hw5ar0h8y"/><g transform="translate(-521.6 -12.27)scale(.3004)"><circle transform="translate(1726 30.29)scale(3.619)" class="gdy4fzb-z"/><path class="yyihj2ujd"/></g><circle transform="translate(-3.13 -3.172)scale(1.087)" class="m3gwznb_p"/>`,
		"fallback": "openmoji:japanese-congratulations-button",
	});
}

export default Component;
