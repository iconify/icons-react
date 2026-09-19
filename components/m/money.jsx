import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/opc7bmaxy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="opc7bmaxy"/>`,
		"fallback": "fluent-mdl2:money",
	});
}

export default Component;
