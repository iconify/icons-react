import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/g/gycevabte.css';
import '../../css/w/wo44ytbsn.css';
import '../../css/u/uafzcacoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="gycevabte"/><path class="wo44ytbsn"/></g><path class="uafzcacoa"/></g>`,
		"fallback": "solar:scooter-bold-duotone",
	});
}

export default Component;
