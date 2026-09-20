import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fs2eo8biz.css';
import '../../css/z/zq72x3bnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fs2eo8biz"/><path class="zq72x3bnf"/></g>`,
		"fallback": "keyline-icons:send-sharp-duotone",
	});
}

export default Component;
