import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nn9zyjp_z.css';
import '../../css/g/g7-z5_thi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nn9zyjp_z"/><path class="g7-z5_thi"/></g>`,
		"fallback": "lucide-extended:users-duotone",
	});
}

export default Component;
