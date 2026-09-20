import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6zq9aczq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6zq9aczq"/>`,
		"fallback": "ri:safari-fill",
	});
}

export default Component;
