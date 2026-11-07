import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_scq114p.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/ed016ybbg.css';
import '../../css/y/yswxml9zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y_scq114p"/><g class="xtpeb-edw"><path class="ed016ybbg"/><path class="yswxml9zk"/></g>`,
		"fallback": "solar:walking-round-bold-duotone",
	});
}

export default Component;
