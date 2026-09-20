import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sweq171vo.css';
import '../../css/p/pv-ny7b6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sweq171vo"/><path class="pv-ny7b6n"/></g>`,
		"fallback": "streamline-flex-color:satellite-dish-flat",
	});
}

export default Component;
