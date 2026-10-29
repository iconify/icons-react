import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/r/r7n36fb4k.css';
import '../../css/v/vwzncsbmf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="r7n36fb4k"/><path class="vwzncsbmf"/></g>`,
		"fallback": "withicons:panel-right-duo",
	});
}

export default Component;
