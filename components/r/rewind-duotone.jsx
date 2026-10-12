import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oeb61mufe.css';
import '../../css/m/mw0vf3ypc.css';
import '../../css/s/sy65ttwvt.css';
import '../../css/k/k6vifjbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oeb61mufe"/><path class="mw0vf3ypc"/><path class="sy65ttwvt"/><path class="k6vifjbgl"/></g>`,
		"fallback": "lucide-extended:rewind-duotone",
	});
}

export default Component;
