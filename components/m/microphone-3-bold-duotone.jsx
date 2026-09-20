import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgel_z4sw.css';
import '../../css/q/qob8aqbxz.css';
import '../../css/f/f65wj5bau.css';
import '../../css/x/xqjqm5q9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xgel_z4sw"/><path class="qob8aqbxz"/><path class="f65wj5bau"/><path clip-rule="evenodd" class="xqjqm5q9c"/></g>`,
		"fallback": "solar:microphone-3-bold-duotone",
	});
}

export default Component;
