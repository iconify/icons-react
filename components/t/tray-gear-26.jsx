import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnfhi1qkf.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnfhi1qkf"/>`,
		"fallback": "garden:tray-gear-26",
	});
}

export default Component;
