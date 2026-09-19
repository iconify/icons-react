import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4v084nuh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4v084nuh"/>`,
		"fallback": "eva:skip-forward-outline",
	});
}

export default Component;
