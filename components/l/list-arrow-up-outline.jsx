import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0d5y6b-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h0d5y6b-l"/>`,
		"fallback": "solar:list-arrow-up-outline",
	});
}

export default Component;
