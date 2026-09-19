import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ezhm6ccnd.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ezhm6ccnd"/>`,
		"fallback": "vs:speech",
	});
}

export default Component;
