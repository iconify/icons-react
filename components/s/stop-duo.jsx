import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b9xwaeb0f.css';
import '../../css/m/m_gu8i8bb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b9xwaeb0f"/><path class="m_gu8i8bb"/></g>`,
		"fallback": "withicons:stop-duo",
	});
}

export default Component;
