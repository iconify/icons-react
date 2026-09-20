import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vgvx7jbec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vgvx7jbec"/>`,
		"fallback": "mynaui:letter-w-hexagon-solid",
	});
}

export default Component;
