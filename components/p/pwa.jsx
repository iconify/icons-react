import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mak9c1oui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mak9c1oui"/>`,
		"fallback": "thesvg:pwa",
	});
}

export default Component;
