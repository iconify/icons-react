import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/araeuyb9p.css';
import '../../css/w/wuxib33uk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="araeuyb9p"/><path class="wm-a wuxib33uk"/></g>`,
		"fallback": "withicons:trash-2",
	});
}

export default Component;
