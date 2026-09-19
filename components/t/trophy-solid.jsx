import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/me89-bcny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="me89-bcny"/>`,
		"fallback": "heroicons:trophy-solid",
	});
}

export default Component;
