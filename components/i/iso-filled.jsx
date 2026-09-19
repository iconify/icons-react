import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oji3akbpr.css';
import '../../css/y/yvg_m-b6q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oji3akbpr"/><path class="yvg_m-b6q"/>`,
		"fallback": "carbon:iso-filled",
	});
}

export default Component;
