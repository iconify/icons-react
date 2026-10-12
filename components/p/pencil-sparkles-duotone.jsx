import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kyr3r_e9q.css';
import '../../css/y/y965e6boa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kyr3r_e9q"/><path class="y965e6boa"/></g>`,
		"fallback": "lucide-extended:pencil-sparkles-duotone",
	});
}

export default Component;
