import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbkjkzboa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbkjkzboa"/>`,
		"fallback": "bi:reception-3",
	});
}

export default Component;
