import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1oekvo1u.css';
import '../../css/y/y54-3102d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1oekvo1u"/><path clip-rule="evenodd" class="y54-3102d"/>`,
		"fallback": "lets-icons:speed-fill-duotone",
	});
}

export default Component;
