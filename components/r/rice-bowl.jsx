import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v5n78-jtg.css';
import '../../css/d/datni5b3g.css';
import '../../css/v/vv906ftnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v5n78-jtg"/><path class="datni5b3g"/><path class="vv906ftnr"/></g>`,
		"fallback": "iconaut:rice-bowl",
	});
}

export default Component;
