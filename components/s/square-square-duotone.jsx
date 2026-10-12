import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmzyjzk_e.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/o/ocri1_tge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nmzyjzk_e"/><path class="s1a2eew1e"/><path class="ocri1_tge"/></g>`,
		"fallback": "lucide-extended:square-square-duotone",
	});
}

export default Component;
