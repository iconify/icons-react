import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6ilzgb1c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zsf9f-b0s.css';
import '../../css/a/apsfa-b9n.css';
import '../../css/m/m-v6wcb8b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6ilzgb1c secondary"/><g class="dt0cm9dhy primary"><path class="zsf9f-b0s"/><path class="apsfa-b9n"/><path class="m-v6wcb8b"/></g>`,
		"fallback": "iconaut:test-tube-duo",
	});
}

export default Component;
