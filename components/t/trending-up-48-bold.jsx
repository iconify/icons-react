import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7o6v4tnd.css';
import '../../css/r/rargr9bqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7o6v4tnd"/><path class="rargr9bqu"/>`,
		"fallback": "energy-icons:trending-up-48-bold",
	});
}

export default Component;
