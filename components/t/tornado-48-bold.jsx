import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fn9n7-baz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fn9n7-baz"/>`,
		"fallback": "energy-icons:tornado-48-bold",
	});
}

export default Component;
