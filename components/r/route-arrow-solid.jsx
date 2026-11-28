import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2r5dbc3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w2r5dbc3w"/>`,
		"fallback": "iconaut:route-arrow-solid",
	});
}

export default Component;
