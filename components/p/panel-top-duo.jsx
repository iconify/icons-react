import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z0-e90q8t.css';
import '../../css/o/og437mbap.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z0-e90q8t"/><path class="og437mbap"/></g>`,
		"fallback": "withicons:panel-top-duo",
	});
}

export default Component;
