import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9d7tbcqd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9d7tbcqd"/>`,
		"fallback": "radix-icons:letter-case-uppercase",
	});
}

export default Component;
