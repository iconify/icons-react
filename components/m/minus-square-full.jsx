import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvqqu4ben.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvqqu4ben"/>`,
		"fallback": "uil:minus-square-full",
	});
}

export default Component;
