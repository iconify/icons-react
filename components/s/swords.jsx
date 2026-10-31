import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/t/t1l54vtmu.css';
import '../../css/b/bb6msjb5n.css';
import '../../css/c/cnx-2qbvr.css';
import '../../css/n/n-14sid9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="t1l54vtmu"/><path class="bb6msjb5n wm-k"/><path class="cnx-2qbvr wm-a"/><path class="n-14sid9z wm-deco"/></g>`,
		"fallback": "withicons-kawaii:swords",
	});
}

export default Component;
