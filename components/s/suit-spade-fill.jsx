import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc--4bcdu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc--4bcdu"/>`,
		"fallback": "bi:suit-spade-fill",
	});
}

export default Component;
