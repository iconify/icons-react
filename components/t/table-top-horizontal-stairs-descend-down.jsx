import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2v9hmt5h.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2v9hmt5h"/>`,
		"fallback": "memory:table-top-horizontal-stairs-descend-down",
	});
}

export default Component;
