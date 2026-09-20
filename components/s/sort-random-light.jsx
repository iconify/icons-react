import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uahu935re.css';
import '../../css/h/h_762lwnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uahu935re"/><path clip-rule="evenodd" class="h_762lwnv"/></g>`,
		"fallback": "lets-icons:sort-random-light",
	});
}

export default Component;
