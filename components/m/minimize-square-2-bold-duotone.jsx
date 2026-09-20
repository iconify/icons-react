import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wf89k6buf.css';
import '../../css/e/etu8deb5s.css';
import '../../css/j/joyk_zv2b.css';
import '../../css/b/bt_0wb51z.css';
import '../../css/s/sox7v0lig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wf89k6buf"/><path class="etu8deb5s"/><path class="joyk_zv2b"/><path class="bt_0wb51z"/><path class="sox7v0lig"/></g>`,
		"fallback": "solar:minimize-square-2-bold-duotone",
	});
}

export default Component;
