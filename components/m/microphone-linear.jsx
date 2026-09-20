import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/m/mkwvu5bez.css';
import '../../css/g/gweihee3d.css';
import '../../css/u/ujrmgmblc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="mkwvu5bez"/><path class="gweihee3d"/><path class="ujrmgmblc"/><path class="obcs1cbgf"/></g>`,
		"fallback": "solar:microphone-linear",
	});
}

export default Component;
