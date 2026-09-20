import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/r/r1jds9b3f.css';
import '../../css/t/tx-fofwfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="r1jds9b3f"/><path class="tx-fofwfm"/></g>`,
		"fallback": "keyline-icons:lightbulb-on-duotone",
	});
}

export default Component;
