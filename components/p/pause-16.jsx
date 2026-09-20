import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zntwc7g4x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zntwc7g4x"/>`,
		"fallback": "octicon:pause-16",
	});
}

export default Component;
