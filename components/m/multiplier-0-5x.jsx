import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi65vucqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi65vucqs"/>`,
		"fallback": "tabler:multiplier-0-5x",
	});
}

export default Component;
