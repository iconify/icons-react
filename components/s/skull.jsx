import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r6n-7obqf.css';
import '../../css/a/alhtm980p.css';
import '../../css/x/xrrsnjbtq.css';
import '../../css/w/wi9iy9byq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r6n-7obqf"/><path class="alhtm980p"/><path class="xrrsnjbtq"/><path class="wi9iy9byq"/></g>`,
		"fallback": "withicons-bauhaus:skull",
	});
}

export default Component;
