import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_3mstbyq.css';
import '../../css/x/xh0qke_up.css';
import '../../css/l/lo2x74bux.css';
import '../../css/c/c_53ogbue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_3mstbyq"/><path class="xh0qke_up"/><path class="lo2x74bux"/><path class="c_53ogbue"/></g>`,
		"fallback": "lucide-extended:train-front-duotone",
	});
}

export default Component;
