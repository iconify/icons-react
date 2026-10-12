import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbi-oubsk.css';
import '../../css/z/zcgo-28ti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mbi-oubsk"/><path class="zcgo-28ti"/></g>`,
		"fallback": "lucide-extended:magnet-duotone",
	});
}

export default Component;
