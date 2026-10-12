import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzbqg9b5z.css';
import '../../css/h/h_dkj8b4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wzbqg9b5z"/><path class="h_dkj8b4z"/></g>`,
		"fallback": "lucide-extended:shirt-duotone",
	});
}

export default Component;
