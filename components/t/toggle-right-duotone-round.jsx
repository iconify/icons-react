import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ur22bq0yu.css';
import '../../css/d/dck4vac8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ur22bq0yu"/><path class="dck4vac8t"/></g>`,
		"fallback": "coolicons:toggle-right-duotone-round",
	});
}

export default Component;
