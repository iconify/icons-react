import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w2z0u8dqq.css';
import '../../css/l/ledamjbfx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w2z0u8dqq"/><path clip-rule="evenodd" class="ledamjbfx"/></g>`,
		"fallback": "healthicons:ui-user-profile",
	});
}

export default Component;
