import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/ib82o_-zw.css';
import '../../css/j/jeawwlbzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ib82o_-zw"/><path class="jeawwlbzv"/></g>`,
		"fallback": "keyline-icons:sliders-vertical-sharp-two-tone",
	});
}

export default Component;
