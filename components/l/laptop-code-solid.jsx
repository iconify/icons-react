import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7wp6fi0u.css';
import '../../css/y/yze9w1b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7wp6fi0u"/><path class="yze9w1b-z"/>`,
		"fallback": "pixel:laptop-code-solid",
	});
}

export default Component;
