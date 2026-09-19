import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdfm59b0i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdfm59b0i"/>`,
		"fallback": "healthicons:triangle-medium",
	});
}

export default Component;
