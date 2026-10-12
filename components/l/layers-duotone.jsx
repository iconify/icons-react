import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxrgvbcdf.css';
import '../../css/r/rt3fdztit.css';
import '../../css/w/w6mpc9bne.css';
import '../../css/q/qnyh8hkdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxrgvbcdf"/><path class="rt3fdztit"/><path class="w6mpc9bne"/><path class="qnyh8hkdk"/></g>`,
		"fallback": "lucide-extended:layers-duotone",
	});
}

export default Component;
