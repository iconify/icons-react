import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-8t_4bet.css';
import '../../css/p/p8rhusbnu.css';
import '../../css/f/fxnk5mbni.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-8t_4bet"/><path class="p8rhusbnu"/><path class="fxnk5mbni"/></g>`,
		"fallback": "streamline-flex-color:recycle-bin-throw-2",
	});
}

export default Component;
