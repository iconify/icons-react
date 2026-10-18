import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ntv6edefm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ntv6edefm"/>`,
		"fallback": "vadivam:shield",
	});
}

export default Component;
