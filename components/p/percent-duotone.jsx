import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/clnmdacqy.css';
import '../../css/w/wy_dkvg4c.css';
import '../../css/d/d_i7zccah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="clnmdacqy"/><path class="wy_dkvg4c"/><path class="d_i7zccah"/></g>`,
		"fallback": "lucide-extended:percent-duotone",
	});
}

export default Component;
