import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqfws_12w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqfws_12w"/>`,
		"fallback": "si:monitor-fill",
	});
}

export default Component;
