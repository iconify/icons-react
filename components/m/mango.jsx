import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hc7ct3nlt.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hc7ct3nlt"/>`,
		"fallback": "dinkie-icons:mango",
	});
}

export default Component;
