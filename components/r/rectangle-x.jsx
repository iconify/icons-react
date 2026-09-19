import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/elf8j54xy.css';
import '../../css/z/ze8hslbqf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="elf8j54xy"/><path class="ze8hslbqf"/></g>`,
		"fallback": "icon-park-outline:rectangle-x",
	});
}

export default Component;
