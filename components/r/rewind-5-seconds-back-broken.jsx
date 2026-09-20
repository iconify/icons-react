import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yvh9lfbdn.css';
import '../../css/v/v4zr77bef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yvh9lfbdn"/><path class="v4zr77bef"/></g>`,
		"fallback": "solar:rewind-5-seconds-back-broken",
	});
}

export default Component;
