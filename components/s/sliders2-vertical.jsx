import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv1dzs1tm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv1dzs1tm"/>`,
		"fallback": "bi:sliders2-vertical",
	});
}

export default Component;
