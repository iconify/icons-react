import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-g3kgsag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-g3kgsag"/>`,
		"fallback": "tabler:pray",
	});
}

export default Component;
