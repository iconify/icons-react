import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/ryc-3sbpf.css';
import '../../css/k/kn3qn_f9z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ryc-3sbpf"/><path class="kn3qn_f9z"/></g>`,
		"fallback": "si-glyph:pin-location-1",
	});
}

export default Component;
