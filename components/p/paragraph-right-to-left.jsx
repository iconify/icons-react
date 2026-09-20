import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/c/c3_9veh_t.css';
import '../../css/g/guky7-bpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="c3_9veh_t"/><path class="guky7-bpa"/></g>`,
		"fallback": "streamline-sharp-color:paragraph-right-to-left",
	});
}

export default Component;
