import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6081t11q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6081t11q"/>`,
		"fallback": "vadivam:map-pin-check",
	});
}

export default Component;
