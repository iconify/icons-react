import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd6wl4g4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd6wl4g4f"/>`,
		"fallback": "mingcute:mouse-fill",
	});
}

export default Component;
