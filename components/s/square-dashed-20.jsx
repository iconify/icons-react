import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxvb6in6t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxvb6in6t"/>`,
		"fallback": "energy-icons:square-dashed-20",
	});
}

export default Component;
