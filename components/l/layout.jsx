import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/ss86kyb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ss86kyb0v"/>`,
		"fallback": "bxs:layout",
	});
}

export default Component;
