import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obtyzd1ig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obtyzd1ig"/>`,
		"fallback": "tabler:square-rounded-letter-i",
	});
}

export default Component;
