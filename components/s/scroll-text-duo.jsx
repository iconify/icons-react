import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/uv7s600ds.css';
import '../../css/u/uc0yabbtt.css';
import '../../css/j/j5ep5hbtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="uv7s600ds"/><path class="uc0yabbtt wm-a"/><path class="j5ep5hbtz"/></g>`,
		"fallback": "withicons:scroll-text-duo",
	});
}

export default Component;
