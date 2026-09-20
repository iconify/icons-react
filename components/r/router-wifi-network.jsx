import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/o/o167y_bzc.css';
import '../../css/r/r19w39wtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="o167y_bzc"/><path class="r19w39wtg"/></g>`,
		"fallback": "streamline-sharp-color:router-wifi-network",
	});
}

export default Component;
