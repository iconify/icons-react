import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/m7h26_b5s.css';
import '../../css/d/dke6ejbnw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="m7h26_b5s"/><path class="dke6ejbnw"/></g>`,
		"fallback": "streamline-sharp-color:panoramic-screen",
	});
}

export default Component;
