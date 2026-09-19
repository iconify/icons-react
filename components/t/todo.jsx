import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfttfe_2y.css';
import '../../css/r/rirt7bcol.css';
import '../../css/m/mxo2jdblw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qfttfe_2y"><path class="rirt7bcol"/><path class="mxo2jdblw"/></g>`,
		"fallback": "catppuccin:todo",
	});
}

export default Component;
