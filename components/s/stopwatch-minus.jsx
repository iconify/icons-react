import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ceh-mrbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ceh-mrbpm"/>`,
		"fallback": "mdi:stopwatch-minus",
	});
}

export default Component;
