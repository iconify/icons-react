import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mb8d45bhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mb8d45bhg"/>`,
		"fallback": "ix:square",
	});
}

export default Component;
