import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz9u0m0if.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz9u0m0if"/>`,
		"fallback": "iconaut:panel-bottom-expand-solid",
	});
}

export default Component;
