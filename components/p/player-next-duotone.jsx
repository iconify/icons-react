import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/thpwh2u0g.css';
import '../../css/d/dgp718edu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="thpwh2u0g"/><path class="dgp718edu"/></g>`,
		"fallback": "iconamoon:player-next-duotone",
	});
}

export default Component;
