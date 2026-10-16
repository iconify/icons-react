import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmfr5cb-w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmfr5cb-w"/>`,
		"fallback": "energy-icons:user-star-48",
	});
}

export default Component;
