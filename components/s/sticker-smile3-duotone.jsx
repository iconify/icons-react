import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wjhh4lb5v.css';
import '../../css/n/nv0a6sb0g.css';
import '../../css/a/axjypzbfs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wjhh4lb5v"/><path class="nv0a6sb0g"/><path class="axjypzbfs"/></g>`,
		"fallback": "reicon:sticker-smile3-duotone",
	});
}

export default Component;
