import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nbabjgkhn.css';
import '../../css/v/vr6t0cbzr.css';
import '../../css/k/k323-mc_c.css';
import '../../css/a/a-8f8bbur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nbabjgkhn"/><path class="vr6t0cbzr"/><path class="k323-mc_c"/><path class="a-8f8bbur"/></g>`,
		"fallback": "lucide-extended:ribbon-duotone",
	});
}

export default Component;
