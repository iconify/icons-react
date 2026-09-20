import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/t7l4jhy0j.css';
import '../../css/p/p188pubrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="t7l4jhy0j"/><path class="p188pubrr"/></g>`,
		"fallback": "keyline-icons:podium-sharp-duotone",
	});
}

export default Component;
