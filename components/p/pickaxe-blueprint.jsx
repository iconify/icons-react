import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/g/gr1lcr17m.css';
import '../../css/v/vjcygdo2z.css';
import '../../css/o/o2mso7b2d.css';
import '../../css/h/hm8cofb2g.css';
import '../../css/c/cg215f_je.css';
import '../../css/w/w8hr-vqbo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="gr1lcr17m wm-deco"/><path class="vjcygdo2z wm-deco"/><path class="o2mso7b2d wm-deco"/><path class="hm8cofb2g wm-k"/><path class="cg215f_je wm-a"/><path class="w8hr-vqbo wm-k"/></g>`,
		"fallback": "withicons:pickaxe-blueprint",
	});
}

export default Component;
