import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhx7cdbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhx7cdbed"/>`,
		"fallback": "noviair-light:speaker-x",
	});
}

export default Component;
