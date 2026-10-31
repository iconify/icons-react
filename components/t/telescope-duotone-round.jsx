import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ck4-m_2it.css';
import '../../css/n/n-87t3bgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ck4-m_2it"/><path class="n-87t3bgg"/></g>`,
		"fallback": "coolicons:telescope-duotone-round",
	});
}

export default Component;
