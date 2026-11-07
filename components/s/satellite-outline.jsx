import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evbbpm8vf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="evbbpm8vf"/>`,
		"fallback": "solar:satellite-outline",
	});
}

export default Component;
