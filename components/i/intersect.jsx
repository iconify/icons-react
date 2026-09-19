import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ty-po1_hz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ty-po1_hz"/>`,
		"fallback": "bi:intersect",
	});
}

export default Component;
