import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jo_g69brx.css';
import '../../css/q/qyrjxjf9z.css';
import '../../css/a/a9dtoru8r.css';
import '../../css/n/nw6l0ct4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jo_g69brx"/><path class="qyrjxjf9z wm-a"/><path class="a9dtoru8r wm-k"/><path class="nw6l0ct4n wm-a"/></g>`,
		"fallback": "withicons:skip-forward-sketch",
	});
}

export default Component;
