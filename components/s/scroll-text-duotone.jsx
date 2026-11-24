import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sk-2_lbxb.css';
import '../../css/d/d_niiab4v.css';
import '../../css/f/f72ylivjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sk-2_lbxb"/><path class="d_niiab4v"/><path class="f72ylivjo"/></g>`,
		"fallback": "lucide-extended:scroll-text-duotone",
	});
}

export default Component;
