import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d3b55n-_u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d3b55n-_u"/>`,
		"fallback": "streamline-plump:ruler",
	});
}

export default Component;
