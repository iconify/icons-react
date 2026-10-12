import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/o/oqkbo_bdu.css';
import '../../css/x/xdjcl8lev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="oqkbo_bdu"/><path class="xdjcl8lev"/></g>`,
		"fallback": "lucide-extended:panel-bottom-open-duotone",
	});
}

export default Component;
