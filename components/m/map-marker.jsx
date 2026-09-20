import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u148y6bbs.css';
import '../../css/r/re4cghb4q.css';
import '../../css/c/cz14bobdc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="u148y6bbs"><path class="re4cghb4q"/><path class="cz14bobdc"/></g>`,
		"fallback": "mage:map-marker",
	});
}

export default Component;
