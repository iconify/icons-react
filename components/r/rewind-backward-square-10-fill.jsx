import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-jmyp62r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-jmyp62r"/>`,
		"fallback": "mingcute:rewind-backward-square-10-fill",
	});
}

export default Component;
