import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cp0zevb-d.css';
import '../../css/z/z6le6hb_g.css';
import '../../css/p/ppau-_b-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="cp0zevb-d"/><path class="z6le6hb_g"/><path class="ppau-_b-h"/></g>`,
		"fallback": "streamline-sharp-color:location-pin-3-flat",
	});
}

export default Component;
