import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lb93embdy.css';
import '../../css/j/jmov7dbvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lb93embdy"/><path class="jmov7dbvh"/>`,
		"fallback": "energy-icons:route-48-bold",
	});
}

export default Component;
