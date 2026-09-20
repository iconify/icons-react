import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yv-hkbp7d.css';
import '../../css/a/adpl_nbyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yv-hkbp7d"/><path clip-rule="evenodd" class="adpl_nbyb"/></g>`,
		"fallback": "reicon:playback-speed",
	});
}

export default Component;
