import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ywj1izsdt.css';
import '../../css/n/ne7054brg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ywj1izsdt"/><path class="ne7054brg"/></g>`,
		"fallback": "streamline:programming-script-html-five-language-five-code-programming-html",
	});
}

export default Component;
