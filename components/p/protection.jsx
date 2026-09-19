import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/bbo7jrr3o.css';
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
		"content": `<g class="hit3bi0-v"><path class="bbo7jrr3o"/><path class="xx16e09lg"/><path class="urcvvqb_d"/></g>`,
		"fallback": "icon-park-solid:protection",
	});
}

export default Component;
