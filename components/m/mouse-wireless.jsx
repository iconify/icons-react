import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/t/tc_5uz-dz.css';
import '../../css/x/x9r49bbjr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="tc_5uz-dz"/><path class="x9r49bbjr"/></g>`,
		"fallback": "streamline-plump-color:mouse-wireless",
	});
}

export default Component;
