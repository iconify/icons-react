import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arbt2q4zm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arbt2q4zm"/>`,
		"fallback": "temaki:security-camera",
	});
}

export default Component;
