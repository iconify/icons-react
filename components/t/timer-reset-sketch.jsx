import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/d/ditlfwbca.css';
import '../../css/m/mdy835mid.css';
import '../../css/j/jxj7b8bfj.css';
import '../../css/e/e7lab5bim.css';
import '../../css/l/lca_kabbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ditlfwbca"/><path class="mdy835mid wm-k"/><path class="jxj7b8bfj wm-a"/><path class="e7lab5bim wm-k"/><path class="lca_kabbu wm-a"/></g>`,
		"fallback": "withicons:timer-reset-sketch",
	});
}

export default Component;
