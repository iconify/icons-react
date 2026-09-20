import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/nw5pdsbpv.css';
import '../../css/f/fubjnnb6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="nw5pdsbpv"/><path class="fubjnnb6d"/></g>`,
		"fallback": "keyline-icons:route-sharp-fill",
	});
}

export default Component;
