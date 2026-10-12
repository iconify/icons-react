import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nczuji9aw.css';
import '../../css/j/j79h5kjih.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nczuji9aw"/><path class="j79h5kjih"/></g>`,
		"fallback": "lucide-extended:puzzle-duotone",
	});
}

export default Component;
