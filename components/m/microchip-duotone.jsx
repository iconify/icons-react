import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v_-p6zb_w.css';
import '../../css/f/fsgh9ubnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v_-p6zb_w"/><path class="fsgh9ubnr"/></g>`,
		"fallback": "lucide-extended:microchip-duotone",
	});
}

export default Component;
