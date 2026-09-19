import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/d/dki2qy46y.css';
import '../../css/d/dzkcglbjk.css';
import '../../css/x/x1pn6ebie.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="dki2qy46y"/><path class="dzkcglbjk"/><path class="x1pn6ebie"/></g>`,
		"fallback": "icon-park-outline:scale-one",
	});
}

export default Component;
