import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/zu7ckv_si.css';
import '../../css/j/j_6u7-sfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="zu7ckv_si"/><path class="j_6u7-sfw"/></g>`,
		"fallback": "keyline-icons:search-2-list-sharp-two-tone",
	});
}

export default Component;
