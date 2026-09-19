import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/s/svw321bbc.css';
import '../../css/g/gs_5-gc9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="svw321bbc"/><path class="gs_5-gc9x"/></g>`,
		"fallback": "icon-park-outline:phone",
	});
}

export default Component;
