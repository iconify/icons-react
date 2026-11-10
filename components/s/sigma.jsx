import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/v/vruzqw-1z.css';
import '../../css/a/ago-q4g2n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="vruzqw-1z"/><path class="ago-q4g2n"/></g>`,
		"fallback": "matita:sigma",
	});
}

export default Component;
