import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3m5hu29g.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3m5hu29g"/>`,
		"fallback": "dinkie-icons:uni7121-box-filled",
	});
}

export default Component;
