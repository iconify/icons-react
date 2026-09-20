import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m26vviv6k.css';
import '../../css/w/wohwjxbkv.css';
import '../../css/f/fl1oi48bz.css';
import '../../css/n/ntb1wkrmv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m26vviv6k"/><path class="wohwjxbkv"/><path class="fl1oi48bz"/><path class="ntb1wkrmv"/></g>`,
		"fallback": "streamline-plump-color:sail-ship-flat",
	});
}

export default Component;
