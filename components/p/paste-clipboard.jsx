import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ithcr6bmz.css';
import '../../css/a/a_u4ptbkw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ithcr6bmz"/><path class="a_u4ptbkw"/></g>`,
		"fallback": "iconoir:paste-clipboard",
	});
}

export default Component;
