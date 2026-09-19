import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvn3mq7pm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvn3mq7pm"/>`,
		"fallback": "guidance:laboratory",
	});
}

export default Component;
