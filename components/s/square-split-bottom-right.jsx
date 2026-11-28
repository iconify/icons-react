import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b1-l8_61w.css';
import '../../css/h/huhz9fb1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="b1-l8_61w"/><path class="huhz9fb1w"/></g>`,
		"fallback": "iconaut:square-split-bottom-right",
	});
}

export default Component;
