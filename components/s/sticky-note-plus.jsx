import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m0e775bpq.css';
import '../../css/w/wqavz2bzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="m0e775bpq"/><path class="wqavz2bzh"/></g>`,
		"fallback": "lucide:sticky-note-plus",
	});
}

export default Component;
