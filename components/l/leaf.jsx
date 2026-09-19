import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwnj6q1-b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwnj6q1-b"/>`,
		"fallback": "bi:leaf",
	});
}

export default Component;
