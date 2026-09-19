import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uo0w98b7l.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uo0w98b7l"/>`,
		"fallback": "fontisto:spinner-refresh",
	});
}

export default Component;
