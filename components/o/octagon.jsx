import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/na_uq7bzw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="na_uq7bzw"/>`,
		"fallback": "icon-park-outline:octagon",
	});
}

export default Component;
