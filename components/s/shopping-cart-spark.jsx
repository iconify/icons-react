import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fcn_ur_9p.css';
import '../../css/n/ndd5-3b3t.css';
import '../../css/s/shor9_b0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fcn_ur_9p"/><path class="ndd5-3b3t"/><path class="shor9_b0u"/></g>`,
		"fallback": "tabler:shopping-cart-spark",
	});
}

export default Component;
