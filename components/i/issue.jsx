import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqd8fcboz.css';
import '../../css/p/p3g2l7o3u.css';
import '../../css/p/pg9erg_-c.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hqd8fcboz"><circle class="p3g2l7o3u"/><circle class="pg9erg_-c"/></g>`,
		"fallback": "gala:issue",
	});
}

export default Component;
