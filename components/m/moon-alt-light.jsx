import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bve5rq7gc.css';
import '../../css/i/iepn_-bfe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bve5rq7gc"/><path class="iepn_-bfe"/></g>`,
		"fallback": "lets-icons:moon-alt-light",
	});
}

export default Component;
