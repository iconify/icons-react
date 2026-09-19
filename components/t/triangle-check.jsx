import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4bwxk3ys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4bwxk3ys"/>`,
		"fallback": "ci:triangle-check",
	});
}

export default Component;
