import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lp2-91bdq.css';
import '../../css/h/hkv8xbbcy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lp2-91bdq"/><path class="hkv8xbbcy"/></g>`,
		"fallback": "reicon:messages2-filled",
	});
}

export default Component;
