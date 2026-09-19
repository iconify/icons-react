import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlg6s6bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlg6s6bna"/>`,
		"fallback": "humbleicons:note-remove",
	});
}

export default Component;
