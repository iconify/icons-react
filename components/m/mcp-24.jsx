import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz4uhub5s.css';
import '../../css/l/l8wwf1bsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz4uhub5s"/><path class="l8wwf1bsg"/>`,
		"fallback": "octicon:mcp-24",
	});
}

export default Component;
