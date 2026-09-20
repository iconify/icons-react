import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t8nvgqtdk.css';
import '../../css/v/v4zr77bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="t8nvgqtdk"/><path class="v4zr77bef"/></g>`,
		"fallback": "solar:rewind-5-seconds-forward-broken",
	});
}

export default Component;
