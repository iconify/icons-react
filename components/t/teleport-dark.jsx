import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_294hbia.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_294hbia"/>`,
		"fallback": "selfhst:teleport-dark",
	});
}

export default Component;
