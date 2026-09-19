import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z02lppbea.css';
import '../../css/b/b-pg8xbkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z02lppbea"/><path class="b-pg8xbkk"/></g>`,
		"fallback": "hugeicons:previous",
	});
}

export default Component;
