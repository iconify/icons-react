import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/s/s8pml3bkm.css';
import '../../css/g/g3qc0bb8u.css';
import '../../css/n/nh-kspbph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="s8pml3bkm"/><path class="g3qc0bb8u"/><path class="nh-kspbph"/></g>`,
		"fallback": "solar:microphone-3-line-duotone",
	});
}

export default Component;
