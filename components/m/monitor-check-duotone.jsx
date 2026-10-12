import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjlljib5h.css';
import '../../css/k/kx1bn5j4c.css';
import '../../css/o/o3yuhybec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjlljib5h"/><path class="kx1bn5j4c"/><path class="o3yuhybec"/></g>`,
		"fallback": "lucide-extended:monitor-check-duotone",
	});
}

export default Component;
