import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkm3ebcqn.css';
import '../../css/g/gxz5xv9-v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zkm3ebcqn"/><path class="gxz5xv9-v"/></g>`,
		"fallback": "lucide-extended:syringe-duotone",
	});
}

export default Component;
