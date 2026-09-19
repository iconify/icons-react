import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o1wy29y8k.css';
import '../../css/h/hhrsgwhff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o1wy29y8k"/><path class="hhrsgwhff"/>`,
		"fallback": "boxicons:pharmacy",
	});
}

export default Component;
