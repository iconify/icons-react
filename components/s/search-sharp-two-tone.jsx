import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/a/ag6j5y4_q.css';
import '../../css/e/ea3blhbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ag6j5y4_q"/><path class="ea3blhbpk"/></g>`,
		"fallback": "keyline-icons:search-sharp-two-tone",
	});
}

export default Component;
