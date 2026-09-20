import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eu6y76b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eu6y76b2k"/>`,
		"fallback": "thesvg:postcss",
	});
}

export default Component;
