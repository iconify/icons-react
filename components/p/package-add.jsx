import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/m/mu4ajhnbi.css';
import '../../css/s/s6a9woy2h.css';
import '../../css/i/iem8lp2xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="mu4ajhnbi"/><path class="s6a9woy2h"/><path class="iem8lp2xo"/></g>`,
		"fallback": "hugeicons:package-add",
	});
}

export default Component;
