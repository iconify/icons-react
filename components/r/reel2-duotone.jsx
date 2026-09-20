import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y8xvovblm.css';
import '../../css/y/yf-lyevcq.css';
import '../../css/g/ggg8orb1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y8xvovblm"/><path clip-rule="evenodd" class="yf-lyevcq"/><path class="ggg8orb1k"/></g>`,
		"fallback": "reicon:reel2-duotone",
	});
}

export default Component;
