import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz02pm04a.css';
import '../../css/u/ucu3b4dxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz02pm04a"/><path class="ucu3b4dxx"/>`,
		"fallback": "energy-icons:sea-level-rise-48",
	});
}

export default Component;
