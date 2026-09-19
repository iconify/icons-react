import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/f/f8eyw1sna.css';
import '../../css/u/u1jc8vaze.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="f8eyw1sna"/><path class="u1jc8vaze"/></g>`,
		"fallback": "icon-park-outline:phone-two",
	});
}

export default Component;
