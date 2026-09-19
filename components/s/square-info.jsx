import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m231y5u4n.css';
import '../../css/c/cfsdedcbv.css';
import '../../css/e/e8un-zbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m231y5u4n"/><path class="cfsdedcbv"/><circle class="e8un-zbtr"/>`,
		"fallback": "circum:square-info",
	});
}

export default Component;
