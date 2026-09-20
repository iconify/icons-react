import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7-w1bcfj.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7-w1bcfj"/>`,
		"fallback": "la:torii-gate",
	});
}

export default Component;
