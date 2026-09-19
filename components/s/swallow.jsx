import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/f/fngjr_1gm.css';
import '../../css/x/xreekgbzt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="fngjr_1gm"/><path clip-rule="evenodd" class="xreekgbzt"/></g>`,
		"fallback": "icon-park-solid:swallow",
	});
}

export default Component;
