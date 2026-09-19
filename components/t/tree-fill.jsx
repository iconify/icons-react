import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar9t0wyvm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar9t0wyvm"/>`,
		"fallback": "bi:tree-fill",
	});
}

export default Component;
