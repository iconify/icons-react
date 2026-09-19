import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhe8u7b_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhe8u7b_y"/>`,
		"fallback": "iconoir:shield-loading",
	});
}

export default Component;
