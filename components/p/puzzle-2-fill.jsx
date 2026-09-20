import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v01mf95qr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v01mf95qr"/>`,
		"fallback": "ri:puzzle-2-fill",
	});
}

export default Component;
