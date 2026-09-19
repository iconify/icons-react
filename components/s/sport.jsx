import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/t/tg3hbdb9k.css';
import '../../css/x/x8p7rvb4g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="tg3hbdb9k"/><path class="x8p7rvb4g"/></g>`,
		"fallback": "icon-park-solid:sport",
	});
}

export default Component;
