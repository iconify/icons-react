import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj8vw15bg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj8vw15bg"/>`,
		"fallback": "la:registered-solid",
	});
}

export default Component;
