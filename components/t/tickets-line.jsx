import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gqc7uebtn.css';
import '../../css/v/vmkydtrez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gqc7uebtn"/><path class="vmkydtrez"/></g>`,
		"fallback": "majesticons:tickets-line",
	});
}

export default Component;
