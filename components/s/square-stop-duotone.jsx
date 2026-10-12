import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjvg-o7zu.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/i/ij2u_kykf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pjvg-o7zu"/><path class="s1a2eew1e"/><path class="ij2u_kykf"/></g>`,
		"fallback": "lucide-extended:square-stop-duotone",
	});
}

export default Component;
