import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/km76928tv.css';
import '../../css/d/dyvvufbhe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="km76928tv"/><path class="dyvvufbhe"/></g>`,
		"fallback": "quill:print-alt",
	});
}

export default Component;
