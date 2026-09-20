import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekdixv9xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekdixv9xb"/>`,
		"fallback": "ri:shopping-bag-4-line",
	});
}

export default Component;
