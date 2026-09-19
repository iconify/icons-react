import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/xxym7hbhr.css';
import '../../css/i/i5hbabbqv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="xxym7hbhr"/><path class="i5hbabbqv"/></g>`,
		"fallback": "icon-park-solid:volume-up",
	});
}

export default Component;
