import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t26531b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t26531b9i"/>`,
		"fallback": "noviair:satellite",
	});
}

export default Component;
