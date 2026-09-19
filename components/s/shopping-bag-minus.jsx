import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ao6ievrkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ao6ievrkf"/>`,
		"fallback": "griddy-icons:shopping-bag-minus",
	});
}

export default Component;
