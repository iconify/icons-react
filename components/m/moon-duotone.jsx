import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxq4uvb4c.css';
import '../../css/a/agg_7qm2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxq4uvb4c"/><path class="agg_7qm2b"/></g>`,
		"fallback": "lucide-extended:moon-duotone",
	});
}

export default Component;
