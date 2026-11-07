import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eeidxnbcj.css';
import '../../css/l/loxl4zb4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eeidxnbcj"/><path class="loxl4zb4k"/>`,
		"fallback": "solar:ranking-bold",
	});
}

export default Component;
