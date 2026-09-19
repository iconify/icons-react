import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/uocdgacuo.css';
import '../../css/k/klnck4b6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="uocdgacuo"/><path class="klnck4b6u"/></g>`,
		"fallback": "icon-park-outline:people-search",
	});
}

export default Component;
