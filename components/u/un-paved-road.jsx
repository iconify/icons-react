import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vz_q47b8t.css';
import '../../css/d/d4f2oou9v.css';
import '../../css/f/fthhtu5wy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vz_q47b8t"/><path clip-rule="evenodd" class="d4f2oou9v"/><path class="fthhtu5wy"/></g>`,
		"fallback": "healthicons:un-paved-road",
	});
}

export default Component;
