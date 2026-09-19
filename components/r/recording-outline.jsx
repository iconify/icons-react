import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/psp9v-bal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="psp9v-bal"/>`,
		"fallback": "eva:recording-outline",
	});
}

export default Component;
