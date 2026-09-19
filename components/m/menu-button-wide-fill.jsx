import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x71ga5btm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x71ga5btm"/>`,
		"fallback": "bi:menu-button-wide-fill",
	});
}

export default Component;
