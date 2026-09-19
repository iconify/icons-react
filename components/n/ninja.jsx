import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls6_xn_4i.css';
import '../../css/e/e9xcq6pkk.css';
import '../../css/d/dox57-bsu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ls6_xn_4i"><path class="e9xcq6pkk"/><path class="dox57-bsu"/></g>`,
		"fallback": "catppuccin:ninja",
	});
}

export default Component;
