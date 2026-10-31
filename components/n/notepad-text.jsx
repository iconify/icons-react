import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n091jzbqs.css';
import '../../css/d/dsuauebjo.css';
import '../../css/l/lpjsstbnx.css';
import '../../css/r/r6d-dtbwf.css';
import '../../css/x/xpmxqu--v.css';
import '../../css/s/sf_1-962f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="n091jzbqs wm-shadow"/><path class="dsuauebjo"/><path class="lpjsstbnx"/><path class="r6d-dtbwf"/><path class="xpmxqu--v"/><path class="sf_1-962f"/></g>`,
		"fallback": "withicons-retro:notepad-text",
	});
}

export default Component;
