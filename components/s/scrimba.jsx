import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aker38-pg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aker38-pg"/>`,
		"fallback": "simple-icons:scrimba",
	});
}

export default Component;
