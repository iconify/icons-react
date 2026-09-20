import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcl66-bbj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcl66-bbj"/>`,
		"fallback": "radix-icons:space-evenly-vertically",
	});
}

export default Component;
