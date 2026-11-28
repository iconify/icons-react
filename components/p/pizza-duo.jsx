import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gyvavccsv.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bftptrbtp.css';
import '../../css/w/wn6e618bi.css';
import '../../css/i/i0b60i0dz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gyvavccsv secondary"/><g class="dt0cm9dhy primary"><path class="bftptrbtp"/><path class="wn6e618bi"/><path class="i0b60i0dz"/></g>`,
		"fallback": "iconaut:pizza-duo",
	});
}

export default Component;
