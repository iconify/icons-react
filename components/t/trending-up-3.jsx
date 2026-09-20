import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kkms99bwe.css';
import '../../css/v/vfr3d_s5n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="kkms99bwe"/><path class="vfr3d_s5n"/></g>`,
		"fallback": "tabler:trending-up-3",
	});
}

export default Component;
