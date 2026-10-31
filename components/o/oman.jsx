import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqwhos75l.css';
import '../../css/a/alqkqccyy.css';
import '../../css/i/i2wpqi2td.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqwhos75l"/><path class="alqkqccyy"/><path class="i2wpqi2td"/>`,
		"fallback": "tabler-flags:oman",
	});
}

export default Component;
