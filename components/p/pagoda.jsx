import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/ccy9qiast.css';
import '../../css/e/ef6l1eg-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ccy9qiast"/><path class="ef6l1eg-m"/></g>`,
		"fallback": "icon-park-outline:pagoda",
	});
}

export default Component;
