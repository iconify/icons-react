import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bae6gablz.css';
import '../../css/m/m4d6n2bve.css';
import '../../css/v/vtm2u7_cv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bae6gablz"/><path class="m4d6n2bve"/><circle class="vtm2u7_cv"/></g>`,
		"fallback": "iconaut:map-pin-sparkles",
	});
}

export default Component;
