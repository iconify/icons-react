import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/o/odi8opbfk.css';
import '../../css/m/m20d08bum.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="odi8opbfk"/><path class="m20d08bum"/></g>`,
		"fallback": "icon-park-outline:send",
	});
}

export default Component;
