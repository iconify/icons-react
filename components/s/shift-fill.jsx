import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8yp_sb6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8yp_sb6r"/>`,
		"fallback": "bi:shift-fill",
	});
}

export default Component;
