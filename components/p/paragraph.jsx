import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw53pfbof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw53pfbof"/>`,
		"fallback": "pixel:paragraph",
	});
}

export default Component;
