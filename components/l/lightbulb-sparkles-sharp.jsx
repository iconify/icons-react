import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/z/za5n-1h_v.css';
import '../../css/s/srg9fvpxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="za5n-1h_v"/><path class="srg9fvpxi"/></g>`,
		"fallback": "keyline-icons:lightbulb-sparkles-sharp",
	});
}

export default Component;
