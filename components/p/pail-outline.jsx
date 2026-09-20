import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vtb2k4dkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vtb2k4dkq"/>`,
		"fallback": "mdi:pail-outline",
	});
}

export default Component;
