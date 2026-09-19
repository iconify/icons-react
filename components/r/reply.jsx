import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbjn0qbna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbjn0qbna"/>`,
		"fallback": "bx:reply",
	});
}

export default Component;
