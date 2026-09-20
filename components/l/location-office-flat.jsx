import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w_og1mb5r.css';
import '../../css/l/l1eif_0yo.css';
import '../../css/m/mzs5_b4ab.css';
import '../../css/w/wayiifblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w_og1mb5r"/><path class="l1eif_0yo"/><path clip-rule="evenodd" class="mzs5_b4ab"/><path clip-rule="evenodd" class="wayiifblg"/></g>`,
		"fallback": "streamline-sharp-color:location-office-flat",
	});
}

export default Component;
