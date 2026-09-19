import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k93f81brf.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k93f81brf"/>`,
		"fallback": "dinkie-icons:language-latin-small-filled",
	});
}

export default Component;
