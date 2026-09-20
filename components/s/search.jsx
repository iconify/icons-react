import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnr7p1g2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dnr7p1g2m"/>`,
		"fallback": "proicons:search",
	});
}

export default Component;
