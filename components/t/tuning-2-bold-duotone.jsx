import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tvd5eoqrw.css';
import '../../css/r/rxuwlx1ct.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/r/rmfkw9bns.css';
import '../../css/b/bh4awnbzk.css';
import '../../css/r/ro_trobcb.css';
import '../../css/i/ikzl0k6ol.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tvd5eoqrw"/><path class="rxuwlx1ct"/><g class="mc2zb0bvp"><path class="rmfkw9bns"/><path class="bh4awnbzk"/><path class="ro_trobcb"/><path class="ikzl0k6ol"/></g></g>`,
		"fallback": "solar:tuning-2-bold-duotone",
	});
}

export default Component;
