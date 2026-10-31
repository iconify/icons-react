import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f5krpnb1d.css';
import '../../css/x/xu1rj-vna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f5krpnb1d"/><path class="xu1rj-vna"/></g>`,
		"fallback": "coolicons:mosque-duotone-round",
	});
}

export default Component;
