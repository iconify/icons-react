import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uxgaw4bak.css';
import '../../css/w/wih00se2n.css';
import '../../css/z/zpnz3rbfk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uxgaw4bak"/><path class="wih00se2n"/><path clip-rule="evenodd" class="zpnz3rbfk"/></g>`,
		"fallback": "streamline-flex-color:left-click-flat",
	});
}

export default Component;
