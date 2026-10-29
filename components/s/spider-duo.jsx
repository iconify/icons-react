import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/utm6t1y8u.css';
import '../../css/y/yezjuwipq.css';
import '../../css/p/p3dq04btg.css';
import '../../css/n/nn2f9gisi.css';
import '../../css/d/dk-3u6b9m.css';
import '../../css/g/gcej-6bbf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="utm6t1y8u"/><path class="yezjuwipq"/><path class="p3dq04btg wm-s"/><path class="nn2f9gisi"/><path class="dk-3u6b9m"/><path class="gcej-6bbf wm-a"/></g>`,
		"fallback": "withicons:spider-duo",
	});
}

export default Component;
