import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so0b9bbkf.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so0b9bbkf"/>`,
		"fallback": "dinkie-icons:sandwich",
	});
}

export default Component;
