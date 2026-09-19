import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zdja7pbuk.css';
import '../../css/j/jroqwgjpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zdja7pbuk"/><path class="jroqwgjpq"/></g>`,
		"fallback": "icon-park-outline:music",
	});
}

export default Component;
