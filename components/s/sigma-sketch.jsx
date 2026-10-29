import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mkuitqbfl.css';
import '../../css/k/kodab1bmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mkuitqbfl wm-deco"/><path class="kodab1bmu wm-k"/></g>`,
		"fallback": "withicons:sigma-sketch",
	});
}

export default Component;
