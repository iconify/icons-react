import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk-o4xbvq.css';
import '../../css/l/lbifckknp.css';
import '../../css/t/tng-zhj-p.css';
import '../../css/a/akhdmbcky.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect transform="translate(0 -.014)" class="xk-o4xbvq"/><g transform="translate(0 -.014)" class="lbifckknp"><path clip-rule="evenodd" class="tng-zhj-p"/><rect class="akhdmbcky"/></g>`,
		"fallback": "openmoji:new-button",
	});
}

export default Component;
