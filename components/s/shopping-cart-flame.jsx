import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fcn_ur_9p.css';
import '../../css/t/tb313pz2p.css';
import '../../css/a/aa_9aab4j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fcn_ur_9p"/><path class="tb313pz2p"/><path class="aa_9aab4j"/></g>`,
		"fallback": "tabler:shopping-cart-flame",
	});
}

export default Component;
