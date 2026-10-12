import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9oc3j10t.css';
import '../../css/f/f_d5gynxi.css';
import '../../css/i/i-loqsbcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9oc3j10t"/><path class="f_d5gynxi"/><path class="i-loqsbcz"/></g>`,
		"fallback": "lucide-extended:save-duotone",
	});
}

export default Component;
