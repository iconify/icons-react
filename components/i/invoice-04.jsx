import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/mb-rctu0w.css';
import '../../css/k/ki-z3s3do.css';
import '../../css/y/y2r41vbeh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="mb-rctu0w"/><path class="ki-z3s3do"/><path class="y2r41vbeh"/></g>`,
		"fallback": "hugeicons:invoice-04",
	});
}

export default Component;
