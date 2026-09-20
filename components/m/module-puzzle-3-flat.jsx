import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iorhqikzn.css';
import '../../css/k/kthz5hu4m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iorhqikzn"/><path class="kthz5hu4m"/></g>`,
		"fallback": "streamline-color:module-puzzle-3-flat",
	});
}

export default Component;
