import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-4gsqb1d.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-4gsqb1d"/>`,
		"fallback": "fontisto:steam",
	});
}

export default Component;
