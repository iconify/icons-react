import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/w/w32puc2aq.css';
import '../../css/i/ikun3mboq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="w32puc2aq"/><path class="ikun3mboq"/></g>`,
		"fallback": "icon-park-outline:topic-discussion",
	});
}

export default Component;
