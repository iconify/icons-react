import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oay28abyw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oay28abyw"/>`,
		"fallback": "energy-icons:scan-face-20",
	});
}

export default Component;
