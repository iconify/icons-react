import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d804j2b1n.css';
import '../../css/z/z_438uhqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d804j2b1n"/><path class="z_438uhqa"/></g>`,
		"fallback": "lucide-extended:users-collaboration-duotone",
	});
}

export default Component;
