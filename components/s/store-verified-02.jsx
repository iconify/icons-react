import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x33_jggdd.css';
import '../../css/o/oyv5vuy7b.css';
import '../../css/i/i0f6gkbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x33_jggdd"/><path class="oyv5vuy7b"/><path class="i0f6gkbhm"/></g>`,
		"fallback": "hugeicons:store-verified-02",
	});
}

export default Component;
