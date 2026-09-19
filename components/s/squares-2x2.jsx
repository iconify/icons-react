import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iua_9vstk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iua_9vstk"/>`,
		"fallback": "heroicons-outline:squares-2x2",
	});
}

export default Component;
