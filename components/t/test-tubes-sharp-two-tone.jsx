import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vl5-qwbrw.css';
import '../../css/r/rfs8_o06a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vl5-qwbrw"/><path class="rfs8_o06a"/></g>`,
		"fallback": "keyline-icons:test-tubes-sharp-two-tone",
	});
}

export default Component;
