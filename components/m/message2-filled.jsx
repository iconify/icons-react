import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc_x_-kue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc_x_-kue"/>`,
		"fallback": "reicon:message2-filled",
	});
}

export default Component;
