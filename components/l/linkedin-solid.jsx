import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxckmibkm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxckmibkm"/>`,
		"fallback": "basil:linkedin-solid",
	});
}

export default Component;
