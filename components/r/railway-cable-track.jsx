import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejogvfb0e.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejogvfb0e"/>`,
		"fallback": "pinhead:railway-cable-track",
	});
}

export default Component;
