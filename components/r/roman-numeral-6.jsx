import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xysgi34gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xysgi34gs"/>`,
		"fallback": "mdi:roman-numeral-6",
	});
}

export default Component;
