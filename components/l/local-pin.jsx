import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/cu8b2wb6l.css';
import '../../css/o/ok5knhbhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="cu8b2wb6l"/><path class="ok5knhbhc"/></g>`,
		"fallback": "icon-park-solid:local-pin",
	});
}

export default Component;
