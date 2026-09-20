import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnr7b16vr.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vnr7b16vr"/>`,
		"fallback": "jam:station",
	});
}

export default Component;
