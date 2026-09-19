import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jci4y6a-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jci4y6a-z"/>`,
		"fallback": "bxs:trash-alt",
	});
}

export default Component;
