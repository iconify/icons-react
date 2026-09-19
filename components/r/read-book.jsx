import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/p/pea8xwbap.css';
import '../../css/x/xx2ig22fa.css';
import '../../css/b/b6mu38bbk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="pea8xwbap"/><path class="xx2ig22fa"/><circle class="b6mu38bbk"/></g>`,
		"fallback": "icon-park:read-book",
	});
}

export default Component;
