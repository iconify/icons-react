import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2vb22kcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2vb22kcc"/>`,
		"fallback": "pixel:user-check-solid",
	});
}

export default Component;
