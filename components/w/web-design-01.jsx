import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe7l5qbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe7l5qbcm"/>`,
		"fallback": "hugeicons:web-design-01",
	});
}

export default Component;
