import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uub89fbiu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uub89fbiu"/>`,
		"fallback": "fluent-mdl2:storage-acount",
	});
}

export default Component;
