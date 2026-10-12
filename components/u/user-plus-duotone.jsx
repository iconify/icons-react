import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/om8z0cb6g.css';
import '../../css/g/g7-z5_thi.css';
import '../../css/u/ukv6d1ysm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="om8z0cb6g"/><path class="g7-z5_thi"/><path class="ukv6d1ysm"/></g>`,
		"fallback": "lucide-extended:user-plus-duotone",
	});
}

export default Component;
