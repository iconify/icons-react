import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/je1_p6b6p.css';
import '../../css/i/irsgehcir.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="je1_p6b6p secondary"/><path class="irsgehcir primary"/>`,
		"fallback": "iconaut:stroke-line-join-miter-duo",
	});
}

export default Component;
