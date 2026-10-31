import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/m/mrpsvib8v.css';
import '../../css/n/nfmahr2vx.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="mrpsvib8v wm-k"/><path class="nfmahr2vx wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:rotate-ccw",
	});
}

export default Component;
