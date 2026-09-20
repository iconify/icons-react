import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qucn7nbzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qucn7nbzo"/>`,
		"fallback": "keyline-icons:record-duotone",
	});
}

export default Component;
