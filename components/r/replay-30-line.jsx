import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_g3mrghf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_g3mrghf"/>`,
		"fallback": "ri:replay-30-line",
	});
}

export default Component;
