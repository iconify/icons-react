import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iidnv_bgd.css';
import '../../css/f/f29fwjbso.css';
import '../../css/s/s0a2qk_lk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iidnv_bgd"/><path class="f29fwjbso"/><path clip-rule="evenodd" class="s0a2qk_lk"/></g>`,
		"fallback": "lucide-extended:locate-fixed-duotone",
	});
}

export default Component;
