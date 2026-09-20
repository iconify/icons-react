import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_ucf8jbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_ucf8jbm"/>`,
		"fallback": "ri:user-received-line",
	});
}

export default Component;
