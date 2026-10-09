import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcopg4bsu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcopg4bsu"/>`,
		"fallback": "energy-icons:reservoir-48-bold",
	});
}

export default Component;
