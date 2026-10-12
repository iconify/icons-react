import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d_i5s9b1t.css';
import '../../css/s/skp8tjssj.css';
import '../../css/v/vu1o8o0qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d_i5s9b1t"/><path class="skp8tjssj"/><path class="vu1o8o0qr"/></g>`,
		"fallback": "lucide-extended:user-search-duotone",
	});
}

export default Component;
