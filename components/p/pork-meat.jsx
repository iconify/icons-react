import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/vbm1anbvy.css';
import '../../css/c/ci-zjjboq.css';
import '../../css/u/u54p-ys_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="vbm1anbvy"/><path class="ci-zjjboq"/><path class="u54p-ys_e"/></g>`,
		"fallback": "streamline:pork-meat",
	});
}

export default Component;
