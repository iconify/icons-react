import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fjctnebhy.css';
import '../../css/u/ua9mldbhk.css';
import '../../css/y/yl1wu8b7j.css';
import '../../css/i/ie7xf9b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fjctnebhy"/><path class="ua9mldbhk"/><path class="yl1wu8b7j"/><path class="ie7xf9b1i"/></g>`,
		"fallback": "andrsrxn:oven-mitts",
	});
}

export default Component;
