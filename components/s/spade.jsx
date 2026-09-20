import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4p6gw4td.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4p6gw4td"/>`,
		"fallback": "uil:spade",
	});
}

export default Component;
