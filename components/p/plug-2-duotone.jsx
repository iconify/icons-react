import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lz306nc8m.css';
import '../../css/c/c3s4igbde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lz306nc8m"/><path class="c3s4igbde"/></g>`,
		"fallback": "lucide-extended:plug-2-duotone",
	});
}

export default Component;
