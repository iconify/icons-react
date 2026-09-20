import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9ejy0qxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g9ejy0qxz"/>`,
		"fallback": "uil:lock-alt",
	});
}

export default Component;
