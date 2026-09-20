import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q55a64brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q55a64brn"/>`,
		"fallback": "mingcute:rare-fog-lights-fill",
	});
}

export default Component;
