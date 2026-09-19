import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/oo5yojb6u.css';
import '../../css/t/tavlapbbl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="oo5yojb6u"/><path class="tavlapbbl"/></g>`,
		"fallback": "icon-park-outline:watermelon",
	});
}

export default Component;
