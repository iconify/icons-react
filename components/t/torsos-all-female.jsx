import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d4vczpcbl.css';
import '../../css/q/qy0mhroxz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d4vczpcbl"/><path class="qy0mhroxz"/>`,
		"fallback": "foundation:torsos-all-female",
	});
}

export default Component;
