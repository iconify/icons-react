import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/l/l_b2deb8g.css';
import '../../css/i/i81rab26g.css';
import '../../css/i/i3l2mxbql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="l_b2deb8g"/><path class="i81rab26g"/><path class="i3l2mxbql"/></g>`,
		"fallback": "icon-park-outline:level-six-title",
	});
}

export default Component;
