import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdh9olb8w.css';
import '../../css/e/ed31t1blr.css';
import '../../css/g/gm65vjmzj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdh9olb8w"/><path class="ed31t1blr"/><path class="gm65vjmzj"/></g>`,
		"fallback": "lucide-extended:layout-freeform-duotone",
	});
}

export default Component;
