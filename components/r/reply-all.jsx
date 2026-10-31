import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u5zia9b4j.css';
import '../../css/e/exwhvc1bm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="u5zia9b4j"/><path class="exwhvc1bm"/></g>`,
		"fallback": "withicons-retro:reply-all",
	});
}

export default Component;
