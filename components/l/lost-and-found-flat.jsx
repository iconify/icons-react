import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rqixrrxdw.css';
import '../../css/f/fqelom7_s.css';
import '../../css/m/mfgl81bid.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rqixrrxdw"/><path class="fqelom7_s"/><path clip-rule="evenodd" class="mfgl81bid"/></g>`,
		"fallback": "streamline-plump-color:lost-and-found-flat",
	});
}

export default Component;
