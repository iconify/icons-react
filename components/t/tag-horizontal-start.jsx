import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vmvu4abgj.css';
import '../../css/m/mabku0myx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vmvu4abgj"/><path class="mabku0myx"/></g>`,
		"fallback": "keyline-icons:tag-horizontal-start",
	});
}

export default Component;
