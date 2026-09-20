import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lklawe5cz.css';
import '../../css/j/j40labcrn.css';
import '../../css/g/gv3k2ybsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="lklawe5cz"/><rect class="j40labcrn"/><path class="gv3k2ybsd"/></g>`,
		"fallback": "reicon:shapes",
	});
}

export default Component;
