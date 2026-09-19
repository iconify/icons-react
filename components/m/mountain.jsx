import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/i/ig45obiiy.css';
import '../../css/g/g99d2gzfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ig45obiiy"/><path class="g99d2gzfk"/></g>`,
		"fallback": "icon-park-outline:mountain",
	});
}

export default Component;
