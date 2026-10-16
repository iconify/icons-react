import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfegpe3kx.css';
import '../../css/e/ejhrpmb7e.css';
import '../../css/d/dl7nm1bnq.css';
import '../../css/i/ivnfvxbna.css';
import '../../css/v/vno_1ozcy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfegpe3kx"/><path class="ejhrpmb7e"/><path class="dl7nm1bnq"/><path class="ivnfvxbna"/><path class="vno_1ozcy"/>`,
		"fallback": "energy-icons:solar-greenhouse-20-bold",
	});
}

export default Component;
