import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/muj7qwivj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="muj7qwivj"/>`,
		"fallback": "si:video-fill",
	});
}

export default Component;
