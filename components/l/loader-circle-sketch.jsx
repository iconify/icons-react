import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/kcnigrboq.css';
import '../../css/u/u071ex15e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="kcnigrboq"/><path class="u071ex15e"/></g>`,
		"fallback": "withicons:loader-circle-sketch",
	});
}

export default Component;
