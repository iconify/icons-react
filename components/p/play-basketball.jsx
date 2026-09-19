import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1dyr8qoa.css';
import '../../css/u/u69emoh0k.css';
import '../../css/p/pghpbqv_s.css';
import '../../css/p/pzwjaxb8h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t1dyr8qoa"/><path class="u69emoh0k"/><path class="pghpbqv_s"/><path class="pzwjaxb8h"/></g>`,
		"fallback": "icon-park-outline:play-basketball",
	});
}

export default Component;
