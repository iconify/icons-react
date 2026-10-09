import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gfchylgou.css';
import '../../css/a/aa6prfb-y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gfchylgou"/><path class="aa6prfb-y"/>`,
		"fallback": "energy-icons:prism-48-bold",
	});
}

export default Component;
