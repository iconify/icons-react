import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpeeh0b8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpeeh0b8h"/>`,
		"fallback": "coolicons:user-star-corner-round",
	});
}

export default Component;
