import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vnkq6_2-y.css';
import '../../css/q/qte9xhb7o.css';
import '../../css/i/iiz1n_blg.css';
import '../../css/f/f_wibac9u.css';
import '../../css/h/hde33gl8o.css';
import '../../css/e/edma6w6lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vnkq6_2-y"/><path class="qte9xhb7o"/><path class="iiz1n_blg"/><path class="f_wibac9u"/><path class="hde33gl8o"/><path class="edma6w6lg"/></g>`,
		"fallback": "streamline-cyber-color:wall-e",
	});
}

export default Component;
