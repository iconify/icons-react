import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0zr7iqgz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y0zr7iqgz"/>`,
		"fallback": "streamline-color:quotation-2-flat",
	});
}

export default Component;
