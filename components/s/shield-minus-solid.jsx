import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg24e7-ia.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg24e7-ia"/>`,
		"fallback": "iconaut:shield-minus-solid",
	});
}

export default Component;
