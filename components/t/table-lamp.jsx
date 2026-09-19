import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/lt3-vl_5z.css';
import '../../css/l/l_2b_ccut.css';
import '../../css/n/nnc-6wzuz.css';
import '../../css/a/aht3_6o9e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="lt3-vl_5z"/><path class="l_2b_ccut"/><path class="nnc-6wzuz"/><path class="aht3_6o9e"/></g>`,
		"fallback": "icon-park:table-lamp",
	});
}

export default Component;
