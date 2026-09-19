import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwp6e0bsq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwp6e0bsq"/>`,
		"fallback": "bi:scooter",
	});
}

export default Component;
