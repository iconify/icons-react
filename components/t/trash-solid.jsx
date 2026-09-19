import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x24y0hjqb.css';
import '../../css/k/kc3e_ibse.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x24y0hjqb"/><path class="kc3e_ibse"/></g>`,
		"fallback": "iconoir:trash-solid",
	});
}

export default Component;
