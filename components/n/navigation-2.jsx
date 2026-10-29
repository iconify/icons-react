import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ercj48bpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ercj48bpr"/>`,
		"fallback": "withicons-bauhaus:navigation-2",
	});
}

export default Component;
