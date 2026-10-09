import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahnwm4b0f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahnwm4b0f"/>`,
		"fallback": "energy-icons:message-circle-48-bold",
	});
}

export default Component;
