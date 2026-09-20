import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/expcavb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="expcavb0w"/>`,
		"fallback": "ri:single-quotes-l",
	});
}

export default Component;
