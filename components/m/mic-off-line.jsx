import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr3l9zb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tr3l9zb1l"/>`,
		"fallback": "ri:mic-off-line",
	});
}

export default Component;
