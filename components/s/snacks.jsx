import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/w/wbmv93bhh.css';
import '../../css/w/wujqs2ipr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="wbmv93bhh"/><path class="wujqs2ipr"/></g>`,
		"fallback": "icon-park-outline:snacks",
	});
}

export default Component;
