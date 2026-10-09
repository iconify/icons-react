import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef455w1yk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef455w1yk"/>`,
		"fallback": "energy-icons:navigation-off-48-bold",
	});
}

export default Component;
