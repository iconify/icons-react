import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xzj1m4bfg.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/g/gx35_lbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xzj1m4bfg"/><path class="g4vvtk_cw"/><path class="gx35_lbkf"/></g>`,
		"fallback": "lucide-extended:robot-vacuum-duotone",
	});
}

export default Component;
