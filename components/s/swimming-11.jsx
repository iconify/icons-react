import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfr4dsb0p.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfr4dsb0p"/>`,
		"fallback": "maki:swimming-11",
	});
}

export default Component;
