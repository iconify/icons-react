import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/abjx4fbtp.css';
import '../../css/w/watbwr0lo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="abjx4fbtp"/><path class="watbwr0lo"/></g>`,
		"fallback": "keyline-icons:square-align-offset-right-sharp",
	});
}

export default Component;
