import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/n/nw_rvkbdl.css';
import '../../css/q/qx74xwb3m.css';
import '../../css/t/t0nv5pbsx.css';
import '../../css/m/m0-28cbmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="nw_rvkbdl"/><path class="qx74xwb3m"/></g><path class="t0nv5pbsx"/><path class="m0-28cbmp"/>`,
		"fallback": "solar:unlink-bold-duotone",
	});
}

export default Component;
