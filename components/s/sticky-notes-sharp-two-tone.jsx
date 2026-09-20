import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/l/l0l0nyx_c.css';
import '../../css/d/d7kt-8ipq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="l0l0nyx_c"/><path class="d7kt-8ipq"/></g>`,
		"fallback": "keyline-icons:sticky-notes-sharp-two-tone",
	});
}

export default Component;
