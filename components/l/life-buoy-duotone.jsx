import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ukp0h0bby.css';
import '../../css/h/h31rlcbji.css';
import '../../css/m/mb3gk9bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ukp0h0bby"/><path class="h31rlcbji"/><path class="mb3gk9bpt"/></g>`,
		"fallback": "lucide-extended:life-buoy-duotone",
	});
}

export default Component;
