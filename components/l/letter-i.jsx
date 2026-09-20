import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hh9mc2bjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hh9mc2bjo"/>`,
		"fallback": "tabler:letter-i",
	});
}

export default Component;
