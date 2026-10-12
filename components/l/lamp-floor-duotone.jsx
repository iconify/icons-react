import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_keqv53f.css';
import '../../css/v/vtoil4byv.css';
import '../../css/h/heslusqmb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e_keqv53f"/><path class="vtoil4byv"/><path class="heslusqmb"/></g>`,
		"fallback": "lucide-extended:lamp-floor-duotone",
	});
}

export default Component;
