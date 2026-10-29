import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/j6iui7arm.css';
import '../../css/g/gduuvtb0e.css';
import '../../css/g/gq17tp1nx.css';
import '../../css/k/k0r6jz3zq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="j6iui7arm"/><path class="gduuvtb0e wm-k"/><path class="gq17tp1nx wm-a"/><path class="k0r6jz3zq wm-a"/></g>`,
		"fallback": "withicons:square-x-sketch",
	});
}

export default Component;
