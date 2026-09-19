import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k_yiewv3x.css';
import '../../css/s/sc2cd5irh.css';
import '../../css/z/ztf146bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k_yiewv3x"/><path class="sc2cd5irh"/><path class="ztf146bah"/></g>`,
		"fallback": "iconamoon:shopping-bag-duotone",
	});
}

export default Component;
