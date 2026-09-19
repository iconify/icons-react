import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lm2232bcw.css';
import '../../css/e/ev2u2w4wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lm2232bcw"/><path class="ev2u2w4wz"/>`,
		"fallback": "cbi:miele",
	});
}

export default Component;
