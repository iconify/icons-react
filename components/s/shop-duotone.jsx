import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jh2os9osm.css';
import '../../css/i/i4kjgjbmy.css';
import '../../css/z/zhfkr5_ve.css';
import '../../css/q/quvw9vbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jh2os9osm"/><path clip-rule="evenodd" class="i4kjgjbmy"/><path class="zhfkr5_ve"/><path class="quvw9vbbq"/></g>`,
		"fallback": "reicon:shop-duotone",
	});
}

export default Component;
