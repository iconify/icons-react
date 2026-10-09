import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-xqmce0m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-xqmce0m"/>`,
		"fallback": "energy-icons:pause-48",
	});
}

export default Component;
