import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/l_vhlnb1v.css';
import '../../css/l/lq2p-57iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="l_vhlnb1v"/><path class="lq2p-57iz"/></g>`,
		"fallback": "coolicons:sprout-duocolor-round",
	});
}

export default Component;
