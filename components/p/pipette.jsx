import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/shnbtm17n.css';
import '../../css/n/ngqvkubgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="shnbtm17n"/><path class="ngqvkubgw"/></g>`,
		"fallback": "pixelarticons:pipette",
	});
}

export default Component;
