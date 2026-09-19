import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy51f2wrm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy51f2wrm"/>`,
		"fallback": "bi:sign-turn-left-fill",
	});
}

export default Component;
