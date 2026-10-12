import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqrqe6d4m.css';
import '../../css/o/ox4m8-_0l.css';
import '../../css/e/ebg151mhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gqrqe6d4m"/><path class="ox4m8-_0l"/><path class="ebg151mhf"/></g>`,
		"fallback": "lucide-extended:land-plot-duotone",
	});
}

export default Component;
