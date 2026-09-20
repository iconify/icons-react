import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlkquaciy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlkquaciy"/>`,
		"fallback": "ri:sd-card-mini-line",
	});
}

export default Component;
