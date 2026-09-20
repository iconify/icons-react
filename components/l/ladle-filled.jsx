import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m0tek8bsq.css';
import '../../css/y/yq3u75ykd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m0tek8bsq"/><path class="yq3u75ykd"/></g>`,
		"fallback": "reicon:ladle-filled",
	});
}

export default Component;
