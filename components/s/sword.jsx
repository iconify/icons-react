import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-4eaubig.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-4eaubig"/>`,
		"fallback": "at-icons:sword",
	});
}

export default Component;
