import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f_ww0acxe.css';
import '../../css/b/bgwc86bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f_ww0acxe"/><path class="bgwc86bzy"/></g>`,
		"fallback": "iconoir:modern-tv",
	});
}

export default Component;
