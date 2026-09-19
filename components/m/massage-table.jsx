import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/aoyh_tb-b.css';
import '../../css/r/r22my0kcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="aoyh_tb-b"/><path class="r22my0kcs"/></g>`,
		"fallback": "icon-park-outline:massage-table",
	});
}

export default Component;
