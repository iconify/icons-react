import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9bibabvm.css';

const viewBox = {"width":769,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9bibabvm"/>`,
		"fallback": "whh:w-upper-case",
	});
}

export default Component;
