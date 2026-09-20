import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j-wis1b_l.css';
import '../../css/j/jfggo2b1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j-wis1b_l"/><path class="jfggo2b1l"/>`,
		"fallback": "streamline-pixel:interface-essential-alert-triangle-2",
	});
}

export default Component;
