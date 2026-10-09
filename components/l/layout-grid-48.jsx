import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi3ws8b6q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi3ws8b6q"/>`,
		"fallback": "energy-icons:layout-grid-48",
	});
}

export default Component;
