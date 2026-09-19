import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/p/pst5uxmrn.css';
import '../../css/r/rlhd26bov.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="pst5uxmrn"/><path class="rlhd26bov"/></g>`,
		"fallback": "icon-park-outline:optimize",
	});
}

export default Component;
