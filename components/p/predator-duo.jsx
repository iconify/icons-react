import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lavlmcboo.css';
import '../../css/m/mlpkwyupu.css';
import '../../css/p/pc786kb_q.css';
import '../../css/r/rvzs3aciw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lavlmcboo"/><path class="mlpkwyupu"/><path class="pc786kb_q"/><path class="rvzs3aciw"/></g>`,
		"fallback": "streamline-kameleon-color:predator-duo",
	});
}

export default Component;
