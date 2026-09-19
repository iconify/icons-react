import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pits7kbsp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pits7kbsp"/>`,
		"fallback": "healthicons:u-outline",
	});
}

export default Component;
