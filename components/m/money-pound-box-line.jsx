import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chcamsw5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chcamsw5h"/>`,
		"fallback": "ri:money-pound-box-line",
	});
}

export default Component;
