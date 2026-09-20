import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z58k0jbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z58k0jbiu"/>`,
		"fallback": "ri:user-heart-fill",
	});
}

export default Component;
