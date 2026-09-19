import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/tnxwu2faj.css';
import '../../css/p/p9zkvvbfg.css';
import '../../css/w/w5_bwk5dr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="tnxwu2faj"/><path class="p9zkvvbfg"/><path class="w5_bwk5dr"/></g>`,
		"fallback": "icon-park:upload-two",
	});
}

export default Component;
