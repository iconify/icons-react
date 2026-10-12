import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jd-spsilb.css';
import '../../css/o/od6cmr_8o.css';
import '../../css/v/vp7gs9big.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jd-spsilb"/><path class="od6cmr_8o"/><path class="vp7gs9big"/></g>`,
		"fallback": "lucide-extended:shovel-duotone",
	});
}

export default Component;
