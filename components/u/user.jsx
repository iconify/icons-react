import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/i/ic08mpydp.css';
import '../../css/f/f439rob6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ic08mpydp"/><circle class="f439rob6g"/></g>`,
		"fallback": "lets-icons:user",
	});
}

export default Component;
