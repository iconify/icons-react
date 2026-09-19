import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-30mbjbp.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-30mbjbp"/>`,
		"fallback": "dinkie-icons:otfeature-calt",
	});
}

export default Component;
