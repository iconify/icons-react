import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-7kuccws.css';
import '../../css/m/mnp9e5b6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wm-k x-7kuccws"/><path class="mnp9e5b6g wm-a"/></g>`,
		"fallback": "withicons:sky-lantern-solid",
	});
}

export default Component;
