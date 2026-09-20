import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/m/mo11kpbcu.css';
import '../../css/c/chnzr1b_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="mo11kpbcu"/><path class="chnzr1b_j"/></g>`,
		"fallback": "streamline-cyber:paper-binder",
	});
}

export default Component;
