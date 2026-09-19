import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y4f69cbip.css';
import '../../css/p/paxrevb-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y4f69cbip"/><path class="paxrevb-i"/>`,
		"fallback": "circum:save-down-2",
	});
}

export default Component;
