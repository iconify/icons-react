import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/c/ct8mx3bua.css';
import '../../css/f/f3etucb4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ct8mx3bua"/><path class="f3etucb4w"/></g>`,
		"fallback": "withicons:rewind-sketch",
	});
}

export default Component;
