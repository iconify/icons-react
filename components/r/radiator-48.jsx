import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8wvi4bxf.css';
import '../../css/q/qosg0qauw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8wvi4bxf"/><path class="qosg0qauw"/>`,
		"fallback": "energy-icons:radiator-48",
	});
}

export default Component;
