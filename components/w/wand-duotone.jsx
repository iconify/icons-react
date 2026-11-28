import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lzkk3_b4o.css';
import '../../css/m/m_imp0bvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lzkk3_b4o secondary"/><path class="m_imp0bvx primary"/></g>`,
		"fallback": "iconaut:wand-duotone",
	});
}

export default Component;
