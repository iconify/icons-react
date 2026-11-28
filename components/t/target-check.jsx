import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0np4mbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0np4mbkg"/>`,
		"fallback": "noviair:target-check",
	});
}

export default Component;
