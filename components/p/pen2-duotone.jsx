import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zn5_m8bis.css';
import '../../css/q/qxt88f8bq.css';
import '../../css/w/wmf3hlblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zn5_m8bis"/><path class="qxt88f8bq"/><path class="wmf3hlblb"/></g>`,
		"fallback": "reicon:pen2-duotone",
	});
}

export default Component;
