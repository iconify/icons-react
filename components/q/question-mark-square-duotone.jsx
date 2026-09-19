import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stv4069zv.css';
import '../../css/p/pwnohqbpo.css';
import '../../css/z/zivippbsn.css';
import '../../css/q/qg2etou0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="stv4069zv"/><path class="pwnohqbpo"/><path class="zivippbsn"/><path class="qg2etou0z"/></g>`,
		"fallback": "iconamoon:question-mark-square-duotone",
	});
}

export default Component;
