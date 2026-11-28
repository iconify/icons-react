import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kohl8lpdi.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kohl8lpdi"/>`,
		"fallback": "pullo:olive-bold",
	});
}

export default Component;
