import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g6vt25bsd.css';
import '../../css/r/rfkvs9bdx.css';
import '../../css/l/l_2ml6bep.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g6vt25bsd"/><circle class="rfkvs9bdx"/><rect class="l_2ml6bep"/></g>`,
		"fallback": "icon-park:sim-card",
	});
}

export default Component;
