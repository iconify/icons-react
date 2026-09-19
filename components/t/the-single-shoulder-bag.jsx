import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/t/t1gn-ub0x.css';
import '../../css/y/ygvy3bc8x.css';
import '../../css/p/p0-d5wjlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="t1gn-ub0x"/><rect class="ygvy3bc8x"/><path class="p0-d5wjlw"/></g>`,
		"fallback": "icon-park:the-single-shoulder-bag",
	});
}

export default Component;
