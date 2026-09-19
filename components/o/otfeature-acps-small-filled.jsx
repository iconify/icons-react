import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cumjaub7k.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cumjaub7k"/>`,
		"fallback": "dinkie-icons:otfeature-acps-small-filled",
	});
}

export default Component;
