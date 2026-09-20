import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/djblclbiq.css';
import '../../css/g/gdp3_mbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="djblclbiq"/><path clip-rule="evenodd" class="gdp3_mbta"/></g>`,
		"fallback": "reicon:plus-circle",
	});
}

export default Component;
