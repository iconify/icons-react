import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msd0nxxnp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msd0nxxnp"/>`,
		"fallback": "eva:twitter-fill",
	});
}

export default Component;
