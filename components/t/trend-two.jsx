import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/j/j9hg1or3h.css';
import '../../css/r/rg5z66b7q.css';
import '../../css/m/msva-3b9o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="j9hg1or3h"/><path class="rg5z66b7q"/><path class="msva-3b9o"/></g>`,
		"fallback": "icon-park-solid:trend-two",
	});
}

export default Component;
