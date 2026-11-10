import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sns67zb6g.css';
import '../../css/m/mj5kwqbfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sns67zb6g"/><path class="mj5kwqbfz"/></g>`,
		"fallback": "andrsrxn:notes-plus",
	});
}

export default Component;
