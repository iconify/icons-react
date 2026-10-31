import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a05ihraux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a05ihraux"/>`,
		"fallback": "withicons:user-round-gloss",
	});
}

export default Component;
