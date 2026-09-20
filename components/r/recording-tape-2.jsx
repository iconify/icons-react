import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/m2iliv-hd.css';
import '../../css/e/e1z4dhbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="m2iliv-hd"/><path class="e1z4dhbzt"/></g>`,
		"fallback": "streamline-sharp-color:recording-tape-2",
	});
}

export default Component;
