import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw9acm4lh.css';

const viewBox = {"width":14,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw9acm4lh"/>`,
		"fallback": "octicon:unfold",
	});
}

export default Component;
