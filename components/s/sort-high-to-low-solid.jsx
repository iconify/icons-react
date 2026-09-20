import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gh-4jo2tm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gh-4jo2tm"/>`,
		"fallback": "teenyicons:sort-high-to-low-solid",
	});
}

export default Component;
