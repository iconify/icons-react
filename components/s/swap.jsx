import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1dkydbje.css';
import '../../css/t/tqg386bbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r1dkydbje"/><path class="tqg386bbx"/></g>`,
		"fallback": "withicons-retro:swap",
	});
}

export default Component;
