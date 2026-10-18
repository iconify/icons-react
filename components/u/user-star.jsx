import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy1842boi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy1842boi"/>`,
		"fallback": "vadivam:user-star",
	});
}

export default Component;
