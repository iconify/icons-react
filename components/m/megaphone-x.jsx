import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n46sb0b_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n46sb0b_f"/>`,
		"fallback": "noviair-light:megaphone-x",
	});
}

export default Component;
