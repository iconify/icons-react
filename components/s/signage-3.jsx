import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vs85j8bpz.css';
import '../../css/t/t3vddeb6r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vs85j8bpz"/><path class="t3vddeb6r"/></g>`,
		"fallback": "streamline-sharp-color:signage-3",
	});
}

export default Component;
