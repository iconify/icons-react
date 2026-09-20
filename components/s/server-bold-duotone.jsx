import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/z/zawk6smbg.css';
import '../../css/y/ybuibgbim.css';
import '../../css/g/gik45003g.css';
import '../../css/p/payyg1bev.css';
import '../../css/m/my3lg4b9g.css';
import '../../css/r/rr_v0abvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><g class="mc2zb0bvp"><path class="zawk6smbg"/><path class="ybuibgbim"/></g><path class="gik45003g"/><path class="payyg1bev"/><path class="my3lg4b9g"/><path class="rr_v0abvt"/></g>`,
		"fallback": "solar:server-bold-duotone",
	});
}

export default Component;
