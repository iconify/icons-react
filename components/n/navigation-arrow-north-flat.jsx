import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx1pxqcgv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wx1pxqcgv"/>`,
		"fallback": "streamline-flex-color:navigation-arrow-north-flat",
	});
}

export default Component;
