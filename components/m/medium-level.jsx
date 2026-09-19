import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t0wmunvsb.css';
import '../../css/h/hyb64jnbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t0wmunvsb"/><path class="hyb64jnbg"/></g>`,
		"fallback": "healthicons:medium-level",
	});
}

export default Component;
