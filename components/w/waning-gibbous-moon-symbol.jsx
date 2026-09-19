import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q1z8q8b9y.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q1z8q8b9y"/>`,
		"fallback": "dinkie-icons:waning-gibbous-moon-symbol",
	});
}

export default Component;
