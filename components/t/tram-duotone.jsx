import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m3d6tzcbq.css';
import '../../css/q/q3rk5vbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m3d6tzcbq secondary"/><path class="primary q3rk5vbxd"/></g>`,
		"fallback": "iconaut:tram-duotone",
	});
}

export default Component;
