import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km4qrvb6q.css';
import '../../css/g/glz7hvb0i.css';
import '../../css/h/h13z2jfxk.css';
import '../../css/y/ydf6iebbu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km4qrvb6q"/><linearGradient id="SVG3kKRQbNN" x1="256.2" x2="256.2" y1="51.8" y2="464" gradientUnits="userSpaceOnUse"><stop offset="0" class="glz7hvb0i"/><stop offset="1" class="h13z2jfxk"/></linearGradient><path fill="url(#SVG3kKRQbNN)" class="ydf6iebbu"/>`,
		"fallback": "selfhst:shaarli",
	});
}

export default Component;
