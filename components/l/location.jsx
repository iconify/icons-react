import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxgp7eb0d.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxgp7eb0d"/>`,
		"fallback": "oi:location",
	});
}

export default Component;
