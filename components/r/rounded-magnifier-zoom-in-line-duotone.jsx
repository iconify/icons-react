import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l_z2a8vzi.css';
import '../../css/z/zbh99ubxk.css';
import '../../css/j/jjar52fez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="l_z2a8vzi"/><path class="zbh99ubxk"/><path class="jjar52fez"/></g>`,
		"fallback": "solar:rounded-magnifier-zoom-in-line-duotone",
	});
}

export default Component;
