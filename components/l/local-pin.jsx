import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/c7oan72ji.css';
import '../../css/o/ok5knhbhc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="c7oan72ji"/><path class="ok5knhbhc"/></g>`,
		"fallback": "icon-park-outline:local-pin",
	});
}

export default Component;
