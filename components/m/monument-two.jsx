import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/r/rzuxpqb9h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j9hg1or3h"/><path class="rzuxpqb9h"/></g>`,
		"fallback": "icon-park-solid:monument-two",
	});
}

export default Component;
