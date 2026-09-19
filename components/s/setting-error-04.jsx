import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/q-xakqboy.css';
import '../../css/v/vq_hmhzfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="q-xakqboy"/><path class="vq_hmhzfq"/></g>`,
		"fallback": "hugeicons:setting-error-04",
	});
}

export default Component;
