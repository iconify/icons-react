import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_nha4_pc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_nha4_pc"/>`,
		"fallback": "carbon:user-favorite",
	});
}

export default Component;
