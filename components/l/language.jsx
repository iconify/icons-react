import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xjv-whe4h.css';
import '../../css/g/ggo7vfb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xjv-whe4h"/><path class="ggo7vfb5r"/></g>`,
		"fallback": "withicons-retro:language",
	});
}

export default Component;
