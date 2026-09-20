import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r9_g5nb_c.css';
import '../../css/k/ks_z9sb4i.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r9_g5nb_c"/><path class="ks_z9sb4i"/></g>`,
		"fallback": "streamline-color:shield-2",
	});
}

export default Component;
