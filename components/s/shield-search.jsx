import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xaoncyb6e.css';
import '../../css/v/vt6fgp66q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="xaoncyb6e"/><path class="vt6fgp66q"/></g>`,
		"fallback": "iconoir:shield-search",
	});
}

export default Component;
