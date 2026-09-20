import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on9qdlkrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on9qdlkrc"/>`,
		"fallback": "keyline-icons:layout-dashboard-sharp-fill",
	});
}

export default Component;
