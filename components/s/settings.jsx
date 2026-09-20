import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw9u178af.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gw9u178af"/>`,
		"fallback": "ooui:settings",
	});
}

export default Component;
