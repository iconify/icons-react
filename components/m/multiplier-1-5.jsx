import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uywc1tb1m.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uywc1tb1m"/>`,
		"fallback": "nrk:multiplier-1-5",
	});
}

export default Component;
