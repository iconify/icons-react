import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c8f47jrsp.css';
import '../../css/j/jnxuei71b.css';
import '../../css/h/hrm-hmbkx.css';
import '../../css/s/sdhzp1g3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c8f47jrsp"/><path clip-rule="evenodd" class="jnxuei71b"/><path class="hrm-hmbkx"/><path class="sdhzp1g3r"/></g>`,
		"fallback": "reicon:route-track",
	});
}

export default Component;
