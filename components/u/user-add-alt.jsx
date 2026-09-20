import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/w/wcc3xccni.css';
import '../../css/s/spr08kbuw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><circle class="wcc3xccni"/><path class="spr08kbuw"/></g>`,
		"fallback": "lets-icons:user-add-alt",
	});
}

export default Component;
