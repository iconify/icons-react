import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zh5kxabel.css';
import '../../css/s/sid7-jb_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zh5kxabel"/><path clip-rule="evenodd" class="sid7-jb_i"/></g>`,
		"fallback": "reicon:ticket2",
	});
}

export default Component;
