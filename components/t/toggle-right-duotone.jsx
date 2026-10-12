import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrknojtdi.css';
import '../../css/z/zunmuyb3r.css';
import '../../css/b/bwdud_gdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mrknojtdi"/><path class="zunmuyb3r"/><path clip-rule="evenodd" class="bwdud_gdb"/></g>`,
		"fallback": "lucide-extended:toggle-right-duotone",
	});
}

export default Component;
