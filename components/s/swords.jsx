import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/ro3_dxbqw.css';
import '../../css/v/v86w35ypf.css';
import '../../css/q/qbafbepse.css';
import '../../css/w/wimwiwbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ro3_dxbqw wm-k"/><path class="v86w35ypf wm-a"/><path class="qbafbepse"/><path class="wimwiwbqi"/></g>`,
		"fallback": "withicons-bauhaus:swords",
	});
}

export default Component;
