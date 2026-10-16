import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vizje167c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vizje167c"/>`,
		"fallback": "energy-icons:layout-list-48",
	});
}

export default Component;
