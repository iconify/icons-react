import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvytzjb9u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvytzjb9u"/>`,
		"fallback": "bi:list-check",
	});
}

export default Component;
