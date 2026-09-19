import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sl9kl67bf.css';
import '../../css/l/lld4lch9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sl9kl67bf"/><path class="lld4lch9c"/></g>`,
		"fallback": "hugeicons:shield-cog-corner",
	});
}

export default Component;
