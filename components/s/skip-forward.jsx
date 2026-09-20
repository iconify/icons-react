import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzwz5-bow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzwz5-bow"/>`,
		"fallback": "keyline-icons:skip-forward",
	});
}

export default Component;
