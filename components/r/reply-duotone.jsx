import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/q74ta3m_n.css';
import '../../css/m/mfv03gb-p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="q74ta3m_n"/><path class="mfv03gb-p"/></g>`,
		"fallback": "reicon:reply-duotone",
	});
}

export default Component;
