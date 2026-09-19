import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dw-u0abrp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dw-u0abrp"/>`,
		"fallback": "ep:menu",
	});
}

export default Component;
