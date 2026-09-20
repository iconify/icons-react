import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp--4acfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp--4acfu"/>`,
		"fallback": "mdi:smoking",
	});
}

export default Component;
