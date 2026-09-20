import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8l11yg9a.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/g/g7m_9fb1u.css';
import '../../css/c/cj59lz24r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x8l11yg9a"/><path class="xiby4z7mg"/><path class="g7m_9fb1u"/><path clip-rule="evenodd" class="cj59lz24r"/></g>`,
		"fallback": "solar:password-minimalistic-outline",
	});
}

export default Component;
