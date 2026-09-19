import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px8-8pbwp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px8-8pbwp"/>`,
		"fallback": "bi:skip-start-btn-fill",
	});
}

export default Component;
