import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/r/r7cku2d8b.css';
import '../../css/c/cbj4y4g2h.css';
import '../../css/g/g1p6t0b1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="r7cku2d8b"/><path class="cbj4y4g2h"/><path class="g1p6t0b1u"/></g>`,
		"fallback": "keyline-icons:pig-sharp-two-tone",
	});
}

export default Component;
