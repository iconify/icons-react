import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z_eex4b_i.css';
import '../../css/n/ne20mhb3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z_eex4b_i"/><path class="ne20mhb3w"/></g>`,
		"fallback": "keyline-icons:moon-star-two-tone",
	});
}

export default Component;
