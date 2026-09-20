import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wywvy8d4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wywvy8d4o"/>`,
		"fallback": "token:rbn",
	});
}

export default Component;
