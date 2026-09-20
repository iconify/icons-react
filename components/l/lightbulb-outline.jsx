import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scg-lw7vv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scg-lw7vv"/>`,
		"fallback": "mdi:lightbulb-outline",
	});
}

export default Component;
