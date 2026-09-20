import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owh6n4siz.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owh6n4siz"/>`,
		"fallback": "octicon:watch",
	});
}

export default Component;
