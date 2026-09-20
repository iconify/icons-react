import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h9a2o1loy.css';
import '../../css/o/oez4b4r8u.css';
import '../../css/j/jw-g7jbfx.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/j/j2k_zbc1w.css';
import '../../css/q/qloe2-b9j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h9a2o1loy"><path class="oez4b4r8u"/><path class="jw-g7jbfx"/></g><g class="x8poo_bjf"><path class="j2k_zbc1w"/><path class="qloe2-b9j"/></g>`,
		"fallback": "openmoji:outbox-tray",
	});
}

export default Component;
