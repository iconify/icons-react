import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otok5pczo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otok5pczo"/>`,
		"fallback": "iconaut:square-braces-solid",
	});
}

export default Component;
