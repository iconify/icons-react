import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g-_m7cctp.css';
import '../../css/g/gdp3_mbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g-_m7cctp"/><path clip-rule="evenodd" class="gdp3_mbta"/></g>`,
		"fallback": "reicon:restart-circle",
	});
}

export default Component;
