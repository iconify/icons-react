import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rg-n6qb2c.css';
import '../../css/s/sgvz6u9ad.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rg-n6qb2c"/><path class="sgvz6u9ad"/></g>`,
		"fallback": "streamline-flex-color:screen-curve",
	});
}

export default Component;
