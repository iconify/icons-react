import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwkxj401l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dwkxj401l"/>`,
		"fallback": "roentgen:power-tower-h-frame-2-level",
	});
}

export default Component;
