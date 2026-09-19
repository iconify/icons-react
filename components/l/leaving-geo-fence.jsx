import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/btgl67brg.css';
import '../../css/r/ry-rl7b2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="btgl67brg"/><path class="ry-rl7b2e"/></g>`,
		"fallback": "hugeicons:leaving-geo-fence",
	});
}

export default Component;
