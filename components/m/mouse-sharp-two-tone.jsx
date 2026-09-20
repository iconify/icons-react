import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/teyv8_8vu.css';
import '../../css/i/iejhesjkt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="teyv8_8vu"/><path class="iejhesjkt"/></g>`,
		"fallback": "keyline-icons:mouse-sharp-two-tone",
	});
}

export default Component;
