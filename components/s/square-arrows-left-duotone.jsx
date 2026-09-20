import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/twwywab3d.css';
import '../../css/m/mvlo8dblb.css';
import '../../css/v/vfonbl_nm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="twwywab3d"/><path class="mvlo8dblb"/><path class="vfonbl_nm"/></g>`,
		"fallback": "reicon:square-arrows-left-duotone",
	});
}

export default Component;
