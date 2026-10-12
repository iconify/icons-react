import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/io_d464_v.css';
import '../../css/d/d33c5cfcb.css';
import '../../css/t/t3i4ct49o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="io_d464_v"/><path class="d33c5cfcb"/><path class="t3i4ct49o"/></g>`,
		"fallback": "lucide-extended:radio-tower-duotone",
	});
}

export default Component;
