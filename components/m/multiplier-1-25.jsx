import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji-p01brs.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji-p01brs"/>`,
		"fallback": "nrk:multiplier-1-25",
	});
}

export default Component;
