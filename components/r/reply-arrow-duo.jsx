import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdawh-2am.css';
import '../../css/d/dcxarjboh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdawh-2am secondary"/><path class="dcxarjboh primary"/>`,
		"fallback": "iconaut:reply-arrow-duo",
	});
}

export default Component;
