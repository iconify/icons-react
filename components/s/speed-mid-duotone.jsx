import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ii0ibspum.css';
import '../../css/o/o-d4_abqi.css';
import '../../css/y/yarsf9bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ii0ibspum"/><path class="o-d4_abqi"/><path class="yarsf9bbx"/></g>`,
		"fallback": "reicon:speed-mid-duotone",
	});
}

export default Component;
