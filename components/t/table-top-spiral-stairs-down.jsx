import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kt6vhkb8t.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kt6vhkb8t"/>`,
		"fallback": "memory:table-top-spiral-stairs-down",
	});
}

export default Component;
