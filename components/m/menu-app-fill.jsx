import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol_k1ab-y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol_k1ab-y"/>`,
		"fallback": "bi:menu-app-fill",
	});
}

export default Component;
