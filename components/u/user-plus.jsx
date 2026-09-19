import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wqeor8b3g.css';
import '../../css/o/o7xo0fbbb.css';
import '../../css/l/ll86lgblt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="wqeor8b3g"/><circle class="o7xo0fbbb"/><path class="ll86lgblt"/></g>`,
		"fallback": "hugeicons:user-plus",
	});
}

export default Component;
