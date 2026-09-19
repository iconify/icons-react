import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dwikpwbti.css';
import '../../css/f/fa-7blb2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><rect class="dwikpwbti"/><path class="fa-7blb2x"/></g>`,
		"fallback": "akar-icons:mobile-device",
	});
}

export default Component;
