import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jalvll6rk.css';
import '../../css/k/k45hr2bcn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jalvll6rk"/><circle class="k45hr2bcn"/></g>`,
		"fallback": "hugeicons:location-user-01",
	});
}

export default Component;
