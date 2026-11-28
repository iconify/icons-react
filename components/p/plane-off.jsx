import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n9skr0b7y.css';
import '../../css/j/j8p3ievks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="n9skr0b7y"/><path class="j8p3ievks"/></g>`,
		"fallback": "iconaut:plane-off",
	});
}

export default Component;
