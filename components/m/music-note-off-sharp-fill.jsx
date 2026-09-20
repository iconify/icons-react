import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i2_k1ib1h.css';
import '../../css/k/k1rh1gkoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i2_k1ib1h"/><path class="k1rh1gkoh"/></g>`,
		"fallback": "keyline-icons:music-note-off-sharp-fill",
	});
}

export default Component;
