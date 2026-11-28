import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqjt0sbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary sqjt0sbhw"/>`,
		"fallback": "iconaut:sprout-duotone",
	});
}

export default Component;
