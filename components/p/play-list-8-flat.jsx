import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/spe2vy0_x.css';
import '../../css/i/ihob9llwi.css';
import '../../css/f/fe3otccrn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="spe2vy0_x"/><path clip-rule="evenodd" class="ihob9llwi"/><path class="fe3otccrn"/></g>`,
		"fallback": "streamline-color:play-list-8-flat",
	});
}

export default Component;
