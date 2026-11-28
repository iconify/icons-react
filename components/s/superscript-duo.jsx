import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w7xxc1u7s.css';
import '../../css/y/y8yihschr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w7xxc1u7s"/><path class="y8yihschr"/></g>`,
		"fallback": "iconaut:superscript-duo",
	});
}

export default Component;
