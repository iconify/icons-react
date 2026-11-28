import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7ns25x2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7ns25x2a"/>`,
		"fallback": "iconaut:spider-solid",
	});
}

export default Component;
