import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zksu7dn2w.css';
import '../../css/y/yt1oy9ckg.css';
import '../../css/i/iyrbwab4q.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zksu7dn2w"/><path class="yt1oy9ckg"/><path class="iyrbwab4q"/></g>`,
		"fallback": "glyphs:road-duo",
	});
}

export default Component;
