import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx58fm3og.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx58fm3og"/>`,
		"fallback": "energy-icons:message-circle-48",
	});
}

export default Component;
