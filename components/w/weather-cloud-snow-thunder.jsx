import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gyyoob9xn.css';
import '../../css/f/fotr6ck_d.css';
import '../../css/w/wqs1nebxz.css';
import '../../css/v/vb5wvtbil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gyyoob9xn"/><path class="fotr6ck_d"/><path class="wqs1nebxz"/><path class="vb5wvtbil"/></g>`,
		"fallback": "streamline-ultimate-color:weather-cloud-snow-thunder",
	});
}

export default Component;
