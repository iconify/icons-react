import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1r9_sbni.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k1r9_sbni"/>`,
		"fallback": "noviair-light:stopwatch-check",
	});
}

export default Component;
