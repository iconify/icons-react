import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lr04pimbt.css';
import '../../css/w/wzn692itm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lr04pimbt"/><path class="wzn692itm"/></g>`,
		"fallback": "proicons:panel-right-open",
	});
}

export default Component;
