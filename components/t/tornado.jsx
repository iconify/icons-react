import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhxvgwbwc.css';
import '../../css/r/rs26g1b4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhxvgwbwc"/><path class="rs26g1b4p"/>`,
		"fallback": "fxemoji:tornado",
	});
}

export default Component;
