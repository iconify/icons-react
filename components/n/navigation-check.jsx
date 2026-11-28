import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/roys9q8ni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="roys9q8ni"/>`,
		"fallback": "noviair:navigation-check",
	});
}

export default Component;
