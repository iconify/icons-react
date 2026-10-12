import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/whrlw_bkm.css';
import '../../css/e/eynsn-b1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="whrlw_bkm"/><path class="eynsn-b1z"/></g>`,
		"fallback": "lucide-extended:skip-forward-duotone",
	});
}

export default Component;
