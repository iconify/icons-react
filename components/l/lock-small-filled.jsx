import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cywjqfb6m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cywjqfb6m"/>`,
		"fallback": "dinkie-icons:lock-small-filled",
	});
}

export default Component;
