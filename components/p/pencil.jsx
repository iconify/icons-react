import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asdlnrbqj.css';

const viewBox = {"width":700,"height":820};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asdlnrbqj"/>`,
		"fallback": "il:pencil",
	});
}

export default Component;
