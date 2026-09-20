import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fox_q4z8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fox_q4z8x"/>`,
		"fallback": "thesvg:redis",
	});
}

export default Component;
