import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbaxuqr4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbaxuqr4x"/>`,
		"fallback": "ri:line-line",
	});
}

export default Component;
