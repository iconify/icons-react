import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/szr5fvutm.css';
import '../../css/i/i3yq3qbys.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="szr5fvutm"/><path class="i3yq3qbys"/></g>`,
		"fallback": "icon-park-outline:resistor",
	});
}

export default Component;
