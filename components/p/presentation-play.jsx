import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqm4dwb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqm4dwb3z"/>`,
		"fallback": "noviair-light:presentation-play",
	});
}

export default Component;
