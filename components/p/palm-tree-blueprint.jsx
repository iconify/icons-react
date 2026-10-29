import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dvgtr2bhk.css';
import '../../css/k/k5j6ft35x.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/c/cd_r3t75o.css';
import '../../css/h/hf7cdeb2d.css';
import '../../css/o/o2s2arf_e.css';
import '../../css/g/gtxndddku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dvgtr2bhk wm-deco"/><path class="k5j6ft35x wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="cd_r3t75o wm-k"/><path class="hf7cdeb2d wm-a"/><path class="o2s2arf_e wm-k"/><path class="gtxndddku wm-a"/></g>`,
		"fallback": "withicons:palm-tree-blueprint",
	});
}

export default Component;
