import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asui5acag.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asui5acag"/>`,
		"fallback": "pinhead:one-pip",
	});
}

export default Component;
