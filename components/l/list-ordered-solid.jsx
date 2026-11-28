import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og0hiob0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og0hiob0l"/>`,
		"fallback": "iconaut:list-ordered-solid",
	});
}

export default Component;
