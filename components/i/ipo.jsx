import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r-6edhb6a.css';
import '../../css/t/t25bmmb3e.css';
import '../../css/w/w89lc-bsd.css';
import '../../css/u/ub3rqnfjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="r-6edhb6a"/><path class="t25bmmb3e"/><path class="w89lc-bsd"/><ellipse class="ub3rqnfjw"/></g>`,
		"fallback": "icon-park-outline:ipo",
	});
}

export default Component;
