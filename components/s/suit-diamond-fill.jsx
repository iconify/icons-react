import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wn6lwlb0p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wn6lwlb0p"/>`,
		"fallback": "bi:suit-diamond-fill",
	});
}

export default Component;
