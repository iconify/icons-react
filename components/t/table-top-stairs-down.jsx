import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2ser0o3q.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2ser0o3q"/>`,
		"fallback": "memory:table-top-stairs-down",
	});
}

export default Component;
