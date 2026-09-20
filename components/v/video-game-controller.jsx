import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/ncu-m_v2f.css';
import '../../css/m/m0-cjab_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ncu-m_v2f"/><path class="m0-cjab_t"/></g>`,
		"fallback": "streamline-freehand:video-game-controller",
	});
}

export default Component;
