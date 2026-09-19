import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/srxhvabsx.css';
import '../../css/y/ydvcf7bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="srxhvabsx"/><path class="ydvcf7bbc"/></g>`,
		"fallback": "hugeicons:modern-tv-4-k",
	});
}

export default Component;
