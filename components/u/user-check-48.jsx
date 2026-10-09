import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/end2zdp7g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="end2zdp7g"/>`,
		"fallback": "energy-icons:user-check-48",
	});
}

export default Component;
