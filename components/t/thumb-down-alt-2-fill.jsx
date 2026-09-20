import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1n2fmc-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1n2fmc-d"/>`,
		"fallback": "si:thumb-down-alt-2-fill",
	});
}

export default Component;
