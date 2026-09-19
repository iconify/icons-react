import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hito320yf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hito320yf"/>`,
		"fallback": "bi:suit-diamond",
	});
}

export default Component;
