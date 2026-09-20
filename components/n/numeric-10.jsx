import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rik9ss2_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rik9ss2_u"/>`,
		"fallback": "mdi:numeric-10",
	});
}

export default Component;
