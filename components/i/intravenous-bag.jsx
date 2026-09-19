import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvcmmrj_g.css';
import '../../css/q/q9ergjblw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uvcmmrj_g"/><path clip-rule="evenodd" class="q9ergjblw"/></g>`,
		"fallback": "healthicons:intravenous-bag",
	});
}

export default Component;
