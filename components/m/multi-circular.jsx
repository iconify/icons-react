import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vkcj4bcdm.css';
import '../../css/d/dudy4jk-t.css';
import '../../css/a/ag4pj_bcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="vkcj4bcdm"/><path class="dudy4jk-t"/><path class="ag4pj_bcs"/></g>`,
		"fallback": "icon-park-solid:multi-circular",
	});
}

export default Component;
