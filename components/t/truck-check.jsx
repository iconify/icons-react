import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q30b9z0uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q30b9z0uo"/>`,
		"fallback": "noviair:truck-check",
	});
}

export default Component;
