import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tp8tg7byn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tp8tg7byn"/>`,
		"fallback": "la:trash-restore",
	});
}

export default Component;
