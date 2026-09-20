import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-e6s_xyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-e6s_xyl"/>`,
		"fallback": "uil:presentation-lines-alt",
	});
}

export default Component;
