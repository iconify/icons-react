import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r9ee07b4q.css';
import '../../css/m/mo4d7k32t.css';
import '../../css/c/cbq31zbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r9ee07b4q wm-k"/><path class="mo4d7k32t wm-a"/><path class="cbq31zbeo wm-s"/></g>`,
		"fallback": "withicons-bauhaus:stamp",
	});
}

export default Component;
