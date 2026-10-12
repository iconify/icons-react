import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/do-kjs8oe.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="do-kjs8oe"/>`,
		"fallback": "garden:stop-stroke-20",
	});
}

export default Component;
