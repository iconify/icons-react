import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j_p66dgsd.css';
import '../../css/i/i138tkbjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j_p66dgsd"/><path class="i138tkbjx"/></g>`,
		"fallback": "tabler:password-fingerprint",
	});
}

export default Component;
