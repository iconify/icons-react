import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iso_je_tj.css';
import '../../css/p/p3y33ibxy.css';
import '../../css/y/y_ybzcyuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iso_je_tj"/><path class="p3y33ibxy"/><path class="y_ybzcyuj"/></g>`,
		"fallback": "lucide-extended:tree-deciduous-duotone",
	});
}

export default Component;
