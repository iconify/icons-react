import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lh453yz2y.css';
import '../../css/f/fr9hniywn.css';
import '../../css/m/mo5netbri.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="lh453yz2y"/><path clip-rule="evenodd" class="fr9hniywn"/><path class="mo5netbri"/></g>`,
		"fallback": "pepicons-pencil:studio-backdrop-off",
	});
}

export default Component;
