import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cz9m_1xzq.css';
import '../../css/v/vhcjiqhvb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cz9m_1xzq"/><path clip-rule="evenodd" class="vhcjiqhvb"/></g>`,
		"fallback": "healthicons:pneumonia-outline",
	});
}

export default Component;
