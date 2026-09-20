import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he6iyvbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he6iyvbcm"/>`,
		"fallback": "prime:linkedin",
	});
}

export default Component;
