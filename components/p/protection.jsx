import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/k/kmql86b4y.css';
import '../../css/x/xx16e09lg.css';
import '../../css/u/urcvvqb_d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="kmql86b4y"/><path class="xx16e09lg"/><path class="urcvvqb_d"/></g>`,
		"fallback": "icon-park-outline:protection",
	});
}

export default Component;
