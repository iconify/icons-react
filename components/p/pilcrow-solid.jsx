import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7dbekbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7dbekbmi"/>`,
		"fallback": "iconaut:pilcrow-solid",
	});
}

export default Component;
