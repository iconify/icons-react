import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g-anivbbg.css';
import '../../css/p/p3d1spb0g.css';
import '../../css/m/m_gu8i8bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g-anivbbg"/><path class="p3d1spb0g wm-shadow"/><path class="m_gu8i8bb"/></g>`,
		"fallback": "withicons:stop-engrave",
	});
}

export default Component;
