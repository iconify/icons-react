import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdq37lsuh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdq37lsuh"/>`,
		"fallback": "teenyicons:menu-outline",
	});
}

export default Component;
