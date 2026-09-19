import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/h/hheq_6bqv.css';
import '../../css/e/eiol0ep0o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="hheq_6bqv"/><path class="eiol0ep0o"/></g>`,
		"fallback": "icon-park-outline:phone-incoming",
	});
}

export default Component;
