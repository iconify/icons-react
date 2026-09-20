import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/m9lr-xbek.css';
import '../../css/n/nog5ftwkf.css';
import '../../css/t/tnljxhbrz.css';
import '../../css/c/ctsiybbva.css';
import '../../css/f/fpgelybpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="m9lr-xbek"/><path class="nog5ftwkf"/><path class="tnljxhbrz"/><circle class="ctsiybbva"/><path class="fpgelybpy"/></g>`,
		"fallback": "solar:wallpaper-linear",
	});
}

export default Component;
