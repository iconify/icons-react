import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/i/igmxyr3ue.css';
import '../../css/i/iceko5bhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="igmxyr3ue"/><path class="iceko5bhy"/></g>`,
		"fallback": "icon-park:minus-the-top",
	});
}

export default Component;
