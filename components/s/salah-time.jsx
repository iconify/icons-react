import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rack3uvhi.css';
import '../../css/v/vh2w-c-im.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rack3uvhi"/><path class="vh2w-c-im"/></g>`,
		"fallback": "hugeicons:salah-time",
	});
}

export default Component;
