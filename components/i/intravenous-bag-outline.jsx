import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n4p47rbwq.css';
import '../../css/i/iok8bk2rv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n4p47rbwq"/><path clip-rule="evenodd" class="iok8bk2rv"/></g>`,
		"fallback": "healthicons:intravenous-bag-outline",
	});
}

export default Component;
