import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wfp2nkr1u.css';
import '../../css/i/ipsjfsb5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="wfp2nkr1u"/><path class="ipsjfsb5c"/></g>`,
		"fallback": "withicons-retro:shuffle",
	});
}

export default Component;
