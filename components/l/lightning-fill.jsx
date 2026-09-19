import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukz7ccbfu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukz7ccbfu"/>`,
		"fallback": "bi:lightning-fill",
	});
}

export default Component;
