import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fv99bxbsz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fv99bxbsz"/>`,
		"fallback": "mdi-light:lock-unlocked",
	});
}

export default Component;
