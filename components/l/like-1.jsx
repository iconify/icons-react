import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/ynphs1b6n.css';
import '../../css/k/k-hnebcyh.css';
import '../../css/m/mj6zwrb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="ynphs1b6n"/><path class="k-hnebcyh"/><path class="mj6zwrb-m"/></g>`,
		"fallback": "streamline-sharp-color:like-1",
	});
}

export default Component;
