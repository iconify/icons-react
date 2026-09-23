import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko5nd2b_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko5nd2b_z"/>`,
		"fallback": "meteor-icons:list",
	});
}

export default Component;
