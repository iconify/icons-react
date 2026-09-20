import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ral4dpmfu.css';
import '../../css/p/pf4pa1bsm.css';
import '../../css/b/b9gesmbow.css';
import '../../css/r/rapb4wc6p.css';
import '../../css/j/j0wjv4bfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ral4dpmfu"/><path class="pf4pa1bsm"/><path class="b9gesmbow"/><path class="rapb4wc6p"/><path class="j0wjv4bfx"/></g>`,
		"fallback": "solar:suspension-bold-duotone",
	});
}

export default Component;
