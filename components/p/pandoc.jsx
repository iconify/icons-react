import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unxxiy_1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unxxiy_1h"/>`,
		"fallback": "thesvg-color:pandoc",
	});
}

export default Component;
