import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/abjx4fbtp.css';
import '../../css/s/slpk0qbtn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="abjx4fbtp"/><path class="slpk0qbtn"/></g>`,
		"fallback": "keyline-icons:square-align-offset-left-sharp",
	});
}

export default Component;
