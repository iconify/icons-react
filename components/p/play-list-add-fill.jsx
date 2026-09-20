import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2x5blw9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2x5blw9x"/>`,
		"fallback": "ri:play-list-add-fill",
	});
}

export default Component;
