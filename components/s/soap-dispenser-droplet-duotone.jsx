import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/ly71s_b6w.css';
import '../../css/o/ok5vfptqt.css';
import '../../css/l/l1m86fbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ly71s_b6w"/><path class="ok5vfptqt"/><path class="l1m86fbpq"/></g>`,
		"fallback": "lucide-extended:soap-dispenser-droplet-duotone",
	});
}

export default Component;
