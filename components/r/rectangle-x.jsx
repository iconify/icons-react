import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/utd7jvywi.css';
import '../../css/z/ze8hslbqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="utd7jvywi"/><path class="ze8hslbqf"/></g>`,
		"fallback": "icon-park-solid:rectangle-x",
	});
}

export default Component;
