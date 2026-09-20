import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vtka3odid.css';
import '../../css/q/qo5kvbnyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vtka3odid"/><path class="qo5kvbnyt"/></g>`,
		"fallback": "reicon:size-filled",
	});
}

export default Component;
