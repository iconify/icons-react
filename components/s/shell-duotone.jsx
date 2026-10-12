import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkk4t03dp.css';
import '../../css/a/a02qp3fxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dkk4t03dp"/><path class="a02qp3fxf"/></g>`,
		"fallback": "lucide-extended:shell-duotone",
	});
}

export default Component;
