import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/as8xp1bht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="as8xp1bht"/>`,
		"fallback": "noviair-light:turtle",
	});
}

export default Component;
