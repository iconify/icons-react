import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uz-6ybbfc.css';
import '../../css/y/yvkryzb6g.css';
import '../../css/e/evvnrpb1m.css';
import '../../css/t/ta0zdfd_y.css';
import '../../css/w/wqwkkfban.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uz-6ybbfc"/><path class="yvkryzb6g"/><path class="evvnrpb1m"/><path class="ta0zdfd_y"/><path class="wqwkkfban"/></g>`,
		"fallback": "solar:monitor-camera-line-duotone",
	});
}

export default Component;
