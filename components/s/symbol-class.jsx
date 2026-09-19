import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zj6c3qb7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zj6c3qb7t"/>`,
		"fallback": "codicon:symbol-class",
	});
}

export default Component;
