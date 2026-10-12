import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ss8l2lain.css';
import '../../css/b/byuk0ty1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ss8l2lain"/><path class="byuk0ty1p"/></g>`,
		"fallback": "lucide-extended:rows-2-duotone",
	});
}

export default Component;
