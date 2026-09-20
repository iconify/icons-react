import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/erdeedb4x.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="erdeedb4x"/>`,
		"fallback": "system-uicons:mail-delete",
	});
}

export default Component;
