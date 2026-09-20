import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gzp5hpbrr.css';
import '../../css/h/hk-wsgaqk.css';
import '../../css/j/j4b0cpb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gzp5hpbrr"/><path clip-rule="evenodd" class="hk-wsgaqk"/><path class="j4b0cpb5j"/></g>`,
		"fallback": "reicon:video-cut2-duotone",
	});
}

export default Component;
