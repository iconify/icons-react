import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffu3be33e.css';
import '../../css/e/e91nqrblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffu3be33e"/><path clip-rule="evenodd" class="e91nqrblz"/>`,
		"fallback": "solar:text-field-outline",
	});
}

export default Component;
