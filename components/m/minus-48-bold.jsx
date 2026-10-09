import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilg_98b5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilg_98b5z"/>`,
		"fallback": "energy-icons:minus-48-bold",
	});
}

export default Component;
