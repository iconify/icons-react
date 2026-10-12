import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jwf3rkznn.css';
import '../../css/n/n2z95934v.css';
import '../../css/l/l6vkg_oos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jwf3rkznn"/><path class="n2z95934v"/><path class="l6vkg_oos"/></g>`,
		"fallback": "lucide-extended:refrigerator-duotone",
	});
}

export default Component;
