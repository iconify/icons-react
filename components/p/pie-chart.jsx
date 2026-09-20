import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r5t7ieb6s.css';
import '../../css/y/yn051jbhl.css';
import '../../css/m/mkd_-xb1k.css';
import '../../css/m/m0s1rngzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r5t7ieb6s"/><path class="yn051jbhl"/><path class="mkd_-xb1k"/><path class="m0s1rngzi"/></g>`,
		"fallback": "streamline-sharp-color:pie-chart",
	});
}

export default Component;
