import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nn2f9gisi.css';
import '../../css/d/dk-3u6b9m.css';
import '../../css/g/gcej-6bbf.css';
import '../../css/p/p3dq04btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nn2f9gisi"/><path class="dk-3u6b9m"/><path class="gcej-6bbf wm-a"/><path class="p3dq04btg wm-s"/></g>`,
		"fallback": "withicons:spider",
	});
}

export default Component;
