import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p5fqw2b4w.css';
import '../../css/c/cfaurcn3g.css';
import '../../css/d/d-mw2bszs.css';
import '../../css/y/yhn6u5b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="p5fqw2b4w wm-k"/><path class="cfaurcn3g wm-k"/><path class="d-mw2bszs wm-s"/><path class="yhn6u5b9z"/></g>`,
		"fallback": "withicons-bauhaus:paisley",
	});
}

export default Component;
