import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/c/c-yymubba.css';
import '../../css/k/kvnld0b2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="c-yymubba"/><path class="kvnld0b2g"/></g>`,
		"fallback": "icon-park-outline:sleep",
	});
}

export default Component;
