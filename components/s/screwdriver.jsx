import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqcps7blt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqcps7blt"/>`,
		"fallback": "at-icons:screwdriver",
	});
}

export default Component;
