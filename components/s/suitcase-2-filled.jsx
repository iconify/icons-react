import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvzi3lbpc.css';
import '../../css/z/zfoh0m8an.css';
import '../../css/p/ps9o2abca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dvzi3lbpc"/><path class="zfoh0m8an"/><path class="ps9o2abca"/></g>`,
		"fallback": "reicon:suitcase-2-filled",
	});
}

export default Component;
