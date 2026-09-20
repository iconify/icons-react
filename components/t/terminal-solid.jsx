import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fx86lacyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fx86lacyi"/>`,
		"fallback": "mynaui:terminal-solid",
	});
}

export default Component;
