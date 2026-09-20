import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcf4q5osf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcf4q5osf"/>`,
		"fallback": "mdi:letter-o-box-outline",
	});
}

export default Component;
