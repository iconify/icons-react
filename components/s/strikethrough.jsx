import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/z-4z5xbxi.css';
import '../../css/m/mn2v80buw.css';
import '../../css/s/s90fclbac.css';
import '../../css/z/zntjxwbwy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="z-4z5xbxi"/><path class="mn2v80buw"/><path class="s90fclbac"/><path class="zntjxwbwy"/></g>`,
		"fallback": "icon-park:strikethrough",
	});
}

export default Component;
