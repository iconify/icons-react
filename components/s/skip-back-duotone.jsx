import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rry4zhb3e.css';
import '../../css/c/ckr17wbno.css';
import '../../css/b/buxgmoc6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rry4zhb3e"/><path class="ckr17wbno"/><path class="buxgmoc6i"/></g>`,
		"fallback": "lucide-extended:skip-back-duotone",
	});
}

export default Component;
