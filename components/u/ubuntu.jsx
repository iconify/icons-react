import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtly1zbcy.css';

const viewBox = {"width":702,"height":704};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtly1zbcy"/>`,
		"fallback": "ls:ubuntu",
	});
}

export default Component;
