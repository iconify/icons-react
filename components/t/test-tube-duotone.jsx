import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijvtq9ttk.css';
import '../../css/o/opi2hbc_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijvtq9ttk"/><path class="opi2hbc_p"/></g>`,
		"fallback": "lucide-extended:test-tube-duotone",
	});
}

export default Component;
