import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u2_toi-5o.css';
import '../../css/z/z4h61sbrv.css';
import '../../css/c/cfqcp_8gy.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(1 1)" class="n1lsf0bnc"><circle class="u2_toi-5o"/><ellipse class="z4h61sbrv"/><path class="cfqcp_8gy"/></g>`,
		"fallback": "si-glyph:trolley-2",
	});
}

export default Component;
