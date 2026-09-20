import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ehj10cn-t.css';
import '../../css/x/xiby4z7mg.css';
import '../../css/g/g7m_9fb1u.css';
import '../../css/u/un073yd9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ehj10cn-t"/><path class="xiby4z7mg"/><path class="g7m_9fb1u"/><path clip-rule="evenodd" class="un073yd9d"/></g>`,
		"fallback": "solar:menu-dots-square-outline",
	});
}

export default Component;
