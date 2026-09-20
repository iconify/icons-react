import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4p8mv-vk.css';
import '../../css/c/co42yjbtz.css';
import '../../css/z/z1efstvih.css';
import '../../css/n/n5mt_x3_w.css';
import '../../css/u/u-iw4ubjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r4p8mv-vk"/><path class="co42yjbtz"/><path class="z1efstvih"/><path class="n5mt_x3_w"/><path class="u-iw4ubjq"/></g>`,
		"fallback": "streamline-cyber-color:male",
	});
}

export default Component;
