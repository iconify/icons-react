import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzx7jlapc.css';
import '../../css/p/p731m3foe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzx7jlapc"/><path clip-rule="evenodd" class="p731m3foe"/></g>`,
		"fallback": "reicon:lock-keyhole-open2",
	});
}

export default Component;
