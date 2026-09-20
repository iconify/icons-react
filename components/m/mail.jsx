import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fydrd87fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fydrd87fr"/>`,
		"fallback": "pixelarticons:mail",
	});
}

export default Component;
