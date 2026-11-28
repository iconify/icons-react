import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg9h9d2-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg9h9d2-v"/>`,
		"fallback": "iconaut:tablets-solid",
	});
}

export default Component;
