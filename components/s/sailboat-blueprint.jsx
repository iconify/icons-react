import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vt_p7bach.css';
import '../../css/c/crfxcv89k.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/o/owwxe_s9p.css';
import '../../css/j/j751fkbps.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vt_p7bach wm-deco"/><path class="crfxcv89k wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="owwxe_s9p"/><path class="j751fkbps"/></g>`,
		"fallback": "withicons:sailboat-blueprint",
	});
}

export default Component;
