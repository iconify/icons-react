import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsew7abve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsew7abve"/>`,
		"fallback": "cbi:power-panel-logo",
	});
}

export default Component;
