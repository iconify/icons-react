import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whx6a7boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whx6a7boz"/>`,
		"fallback": "tabler:users-pause",
	});
}

export default Component;
