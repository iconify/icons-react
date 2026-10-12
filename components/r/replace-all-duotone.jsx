import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w704txbyo.css';
import '../../css/k/kh5f1ub7k.css';
import '../../css/x/x00sututu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w704txbyo"/><path class="kh5f1ub7k"/><path class="x00sututu"/></g>`,
		"fallback": "lucide-extended:replace-all-duotone",
	});
}

export default Component;
