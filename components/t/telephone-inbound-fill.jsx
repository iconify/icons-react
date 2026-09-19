import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiok6x51q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiok6x51q"/>`,
		"fallback": "bi:telephone-inbound-fill",
	});
}

export default Component;
