import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/t/tmknkgmrm.css';
import '../../css/d/drzfh_7tx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="tmknkgmrm"/><path class="drzfh_7tx"/></g>`,
		"fallback": "icon-park-outline:table-report",
	});
}

export default Component;
