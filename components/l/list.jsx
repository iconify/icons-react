import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vyy2w9bab.css';
import '../../css/s/sde337znt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vyy2w9bab"/><path class="sde337znt"/></g>`,
		"fallback": "withicons-retro:list",
	});
}

export default Component;
