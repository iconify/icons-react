import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mtu812bby.css';
import '../../css/z/z1lk1-i3x.css';
import '../../css/f/f9p8yfbou.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mtu812bby"/><path class="z1lk1-i3x"/><path class="f9p8yfbou"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-white-hair",
	});
}

export default Component;
