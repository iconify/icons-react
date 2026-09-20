import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkdb5_b2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkdb5_b2m"/>`,
		"fallback": "thesvg:ryanair",
	});
}

export default Component;
