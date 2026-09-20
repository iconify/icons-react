import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki3taftaq.css';

const viewBox = {"width":40,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki3taftaq"/>`,
		"fallback": "nrk:multiplier-2",
	});
}

export default Component;
