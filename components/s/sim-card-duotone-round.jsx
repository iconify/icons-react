import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m_8w5-bkq.css';
import '../../css/f/f79py29fw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m_8w5-bkq"/><path class="f79py29fw"/></g>`,
		"fallback": "coolicons:sim-card-duotone-round",
	});
}

export default Component;
