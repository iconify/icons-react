import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/f/f-6kokb7j.css';
import '../../css/c/cnmqsablm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="f-6kokb7j"/><path class="cnmqsablm"/></g>`,
		"fallback": "icon-park:mouth",
	});
}

export default Component;
