import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dk2ma36ep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dk2ma36ep"/>`,
		"fallback": "mingcute:profile-fill",
	});
}

export default Component;
