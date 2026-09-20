import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s137axaes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s137axaes"/>`,
		"fallback": "thesvg-color:stencyl",
	});
}

export default Component;
