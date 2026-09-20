import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/uq1qurbeh.css';
import '../../css/y/yhoh7ubik.css';
import '../../css/o/og92yrbah.css';
import '../../css/f/fzisiobjw.css';
import '../../css/m/mhf-g-8fv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="uq1qurbeh"/><path class="yhoh7ubik"/><path class="og92yrbah"/><path class="fzisiobjw"/><path class="mhf-g-8fv"/></g>`,
		"fallback": "streamline-ultimate:technology-device-wearable-smart-watch-circle-app-1",
	});
}

export default Component;
