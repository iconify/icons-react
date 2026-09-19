import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e-eb4i-dl.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e-eb4i-dl"/>`,
		"fallback": "dinkie-icons:uni5f97-box",
	});
}

export default Component;
