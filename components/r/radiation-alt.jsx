import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz4tflwpu.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz4tflwpu"/>`,
		"fallback": "fa-solid:radiation-alt",
	});
}

export default Component;
