import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2mk6acez.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2mk6acez"/>`,
		"fallback": "streamline-flex-color:phone-flat",
	});
}

export default Component;
