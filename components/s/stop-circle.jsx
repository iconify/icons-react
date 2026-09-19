import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swrrjcb6e.css';
import '../../css/e/eos_-nbpn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swrrjcb6e"/><rect class="eos_-nbpn"/></g>`,
		"fallback": "glyphs-poly:stop-circle",
	});
}

export default Component;
