import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jm-p5i8pc.css';
import '../../css/n/nz3e6sb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="jm-p5i8pc"/><path class="nz3e6sb6b"/></g>`,
		"fallback": "andrsrxn:selection-search",
	});
}

export default Component;
