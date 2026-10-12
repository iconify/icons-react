import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mshg-v-db.css';
import '../../css/t/t0telo9xo.css';
import '../../css/b/bc_nukbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mshg-v-db"/><path class="t0telo9xo"/><path class="bc_nukbxh"/></g>`,
		"fallback": "lucide-extended:podium-duotone",
	});
}

export default Component;
