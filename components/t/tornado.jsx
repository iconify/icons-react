import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/zic5p5b-d.css';
import '../../css/t/txxowpbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="zic5p5b-d"/><path class="txxowpbbx"/></g>`,
		"fallback": "withicons-bauhaus:tornado",
	});
}

export default Component;
