import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lt_ca-b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lt_ca-b0s"/>`,
		"fallback": "icon-park-outline:text-style",
	});
}

export default Component;
