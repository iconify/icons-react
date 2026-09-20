import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vw2nn3blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vw2nn3blf"/>`,
		"fallback": "token:vrsw",
	});
}

export default Component;
