import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uagohvbgi.css';
import '../../css/l/lvrgj0b6p.css';
import '../../css/w/w_uzp_byv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uagohvbgi"/><path class="lvrgj0b6p"/><path class="w_uzp_byv"/></g>`,
		"fallback": "lucide-extended:map-pin-plus-inside-duotone",
	});
}

export default Component;
