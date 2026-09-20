import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k56p0xzaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k56p0xzaw"/>`,
		"fallback": "mdi:trophy-variant",
	});
}

export default Component;
