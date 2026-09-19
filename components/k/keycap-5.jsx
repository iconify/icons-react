import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t00mv8b2d.css';
import '../../css/f/ffwe9xbuc.css';

const viewBox = {"width":32,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t00mv8b2d"/><path class="ffwe9xbuc"/></g>`,
		"fallback": "fluent-emoji-flat:keycap-5",
	});
}

export default Component;
