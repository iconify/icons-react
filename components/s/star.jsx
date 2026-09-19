import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb7bx9bge.css';

const viewBox = {"width":1050,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb7bx9bge"/>`,
		"fallback": "websymbol:star",
	});
}

export default Component;
