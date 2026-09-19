import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhrz9cckz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhrz9cckz"/>`,
		"fallback": "griddy-icons:shield-plus-filled",
	});
}

export default Component;
