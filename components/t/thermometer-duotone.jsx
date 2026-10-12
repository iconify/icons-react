import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gq1qiwb9v.css';
import '../../css/g/gtmctcbny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gq1qiwb9v"/><path class="gtmctcbny"/></g>`,
		"fallback": "lucide-extended:thermometer-duotone",
	});
}

export default Component;
