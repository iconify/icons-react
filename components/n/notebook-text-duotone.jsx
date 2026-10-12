import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmv2fpbdp.css';
import '../../css/j/jtt_i7b8h.css';
import '../../css/p/pdnbnwbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmv2fpbdp"/><path class="jtt_i7b8h"/><path class="pdnbnwbzc"/></g>`,
		"fallback": "lucide-extended:notebook-text-duotone",
	});
}

export default Component;
