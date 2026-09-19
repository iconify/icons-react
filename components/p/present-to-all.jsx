import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du0py_b1j.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du0py_b1j"/>`,
		"fallback": "zmdi:present-to-all",
	});
}

export default Component;
