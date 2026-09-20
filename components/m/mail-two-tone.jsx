import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpjsytqjw.css';
import '../../css/d/db9ccbbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mpjsytqjw"/><path class="db9ccbbao"/></g>`,
		"fallback": "keyline-icons:mail-two-tone",
	});
}

export default Component;
