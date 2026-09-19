import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_h7al-6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_h7al-6y"/>`,
		"fallback": "bxs:quote-right",
	});
}

export default Component;
