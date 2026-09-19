import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/v1mw2qb1t.css';
import '../../css/j/j8v342ebz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="v1mw2qb1t"/><path class="j8v342ebz"/></g>`,
		"fallback": "icon-park-outline:two-dimensional-code",
	});
}

export default Component;
