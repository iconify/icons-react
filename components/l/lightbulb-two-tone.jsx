import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/i/idg9yr80n.css';
import '../../css/v/v_g122bhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="idg9yr80n"/><path class="v_g122bhw"/></g>`,
		"fallback": "keyline-icons:lightbulb-two-tone",
	});
}

export default Component;
