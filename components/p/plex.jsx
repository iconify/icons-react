import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wckuc9nmc.css';
import '../../css/h/hze02wt4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="wckuc9nmc"/><path class="hze02wt4y"/>`,
		"fallback": "selfhst:plex",
	});
}

export default Component;
