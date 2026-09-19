import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y63jjc5ag.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y63jjc5ag"/>`,
		"fallback": "f7:plus-bubble-fill",
	});
}

export default Component;
