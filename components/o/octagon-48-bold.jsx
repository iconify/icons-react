import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otpi8ybma.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otpi8ybma"/>`,
		"fallback": "energy-icons:octagon-48-bold",
	});
}

export default Component;
