import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmv2fpbdp.css';
import '../../css/p/pv9ynuz7u.css';
import '../../css/g/gfrp25f_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmv2fpbdp"/><path class="pv9ynuz7u"/><path class="gfrp25f_d"/></g>`,
		"fallback": "lucide-extended:notebook-tabs-duotone",
	});
}

export default Component;
