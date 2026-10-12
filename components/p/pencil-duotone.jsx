import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zlhl_01ib.css';
import '../../css/r/rx626mzkf.css';
import '../../css/u/uyhdqmb_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zlhl_01ib"/><path class="rx626mzkf"/><path class="uyhdqmb_m"/></g>`,
		"fallback": "lucide-extended:pencil-duotone",
	});
}

export default Component;
