import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w0uv33vum.css';
import '../../css/f/f3-iv-3ow.css';
import '../../css/w/w0oyb6d3k.css';
import '../../css/r/re6gqqbct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w0uv33vum"/><path class="f3-iv-3ow wm-a"/><path class="w0oyb6d3k"/><path class="re6gqqbct wm-a"/></g>`,
		"fallback": "withicons:sailboat",
	});
}

export default Component;
