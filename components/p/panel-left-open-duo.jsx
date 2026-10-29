import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/joey29b2t.css';
import '../../css/m/m74-1jszs.css';
import '../../css/a/ao21d5blb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="joey29b2t"/><path class="m74-1jszs wm-a"/><path class="ao21d5blb"/></g>`,
		"fallback": "withicons:panel-left-open-duo",
	});
}

export default Component;
